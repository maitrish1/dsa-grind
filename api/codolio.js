// Strivers A2Z Sheet API — proxies Codolio + persists to strivers-a2z.json on GitHub
// Completely separate from dsa-grind-2026-10-27.json (your ladder data)

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const GITHUB_REPO = process.env.GITHUB_REPO || '';
const BRANCH = process.env.GITHUB_BRANCH || 'main';
const DATA_FILE = 'strivers-a2z.json';
const CODOLIO_BASE = 'https://node.codolio.com/api/question-tracker/v2/sheet';

async function githubRequest(url, method, body) {
  const headers = {
    'Accept': 'application/vnd.github+json',
    'Authorization': `Bearer ${GITHUB_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'dsa-grind-a2z-sync'
  };
  if (body) headers['Content-Type'] = 'application/json';

  const res = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub API ${res.status}: ${text}`);
  }

  if (res.status === 204) return null;
  return res.json();
}

async function readData() {
  try {
    const data = await githubRequest(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${DATA_FILE}`,
      'GET'
    );
    const content = Buffer.from(data.content, 'base64').toString('utf8');
    return JSON.parse(content);
  } catch (e) {
    return { stats: null, sheetData: {}, userProgress: {}, updatedAt: 0 };
  }
}

async function writeData(data) {
  data.updatedAt = Date.now();
  let current;
  try {
    current = await githubRequest(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${DATA_FILE}`,
      'GET'
    );
  } catch (e) {
    current = null;
  }

  const body = {
    message: `Update Strivers A2Z data — ${new Date().toISOString()}`,
    content: Buffer.from(JSON.stringify(data, null, 2)).toString('base64'),
    branch: BRANCH
  };
  if (current && current.sha) body.sha = current.sha;

  await githubRequest(
    `https://api.github.com/repos/${GITHUB_REPO}/contents/${DATA_FILE}`,
    'PUT',
    body
  );
}

function parseBody(req) {
  return new Promise((resolve) => {
    let b = req.body || {};
    if (typeof b === 'string') {
      try { b = JSON.parse(b); } catch { b = {}; }
    }
    resolve(b);
  });
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (!GITHUB_TOKEN || !GITHUB_REPO) {
      return res.status(500).json({ error: 'GitHub not configured. Set GITHUB_TOKEN and GITHUB_REPO in Vercel.' });
    }

    const { endpoint, slug, limit, topic, subTopic, noTopic, noSubTopic } = req.query || {};
    const sheetSlug = slug || 'strivers-a2z-dsa-sheet';

    if (req.method === 'GET') {
      // --- Sheet stats ---
      if (endpoint === 'stats') {
        const cached = await readData();
        const now = Date.now();
        if (cached.stats && cached.statsUpdatedAt && now - cached.statsUpdatedAt < 3600000) {
          return res.status(200).json(cached.stats);
        }

        const codolioRes = await fetch(`${CODOLIO_BASE}/get-sheet-stats/${sheetSlug}`);
        if (!codolioRes.ok) throw new Error(`Codolio stats failed: ${codolioRes.status}`);
        const stats = await codolioRes.json();

        const updated = await readData();
        updated.stats = stats;
        updated.statsUpdatedAt = now;
        await writeData(updated);

        return res.status(200).json(stats);
      }

      // --- Sheet data (topics / subtopics / questions) ---
      if (endpoint === 'sheet') {
        let url = `${CODOLIO_BASE}/get-sheet-data-by-slug/${sheetSlug}?limit=${limit || 50}`;
        if (topic) url += `&topic=${encodeURIComponent(topic)}`;
        if (subTopic) url += `&subTopic=${encodeURIComponent(subTopic)}`;
        if (noTopic !== undefined) url += `&noTopic=${noTopic}`;
        if (noSubTopic !== undefined) url += `&noSubTopic=${noSubTopic}`;

        const codolioRes = await fetch(url);
        if (!codolioRes.ok) throw new Error(`Codolio sheet failed: ${codolioRes.status}`);
        const sheetData = await codolioRes.json();

        const updated = await readData();
        updated.sheetData = updated.sheetData || {};
        updated.sheetData[sheetSlug] = updated.sheetData[sheetSlug] || {};
        const cacheKey = JSON.stringify({ topic, subTopic, limit, noTopic, noSubTopic });
        updated.sheetData[sheetSlug][cacheKey] = {
          data: sheetData,
          fetchedAt: Date.now()
        };
        await writeData(updated);

        return res.status(200).json(sheetData);
      }

      // --- User progress (solutions saved for A2Z problems) ---
      if (endpoint === 'progress') {
        const cached = await readData();
        return res.status(200).json(cached.userProgress || {});
      }
    }

    if (req.method === 'POST') {
      const body = await parseBody(req);

      // --- Save user progress for a problem ---
      if (endpoint === 'progress') {
        if (!body || !body.problemId) {
          return res.status(400).json({ error: 'problemId required' });
        }

        const cached = await readData();
        cached.userProgress = cached.userProgress || {};

        cached.userProgress[body.problemId] = {
          ...(cached.userProgress[body.problemId] || {}),
          problemId: body.problemId,
          status: body.status || 'attempted',
          solutionCode: body.solutionCode || '',
          timeSpent: body.timeSpent || 0,
          note: body.note || '',
          updatedAt: Date.now()
        };

        await writeData(cached);
        return res.status(200).json({ ok: true });
      }
    }

    return res.status(400).json({ error: 'Invalid endpoint. Use ?endpoint=stats|sheet|progress' });
  } catch (e) {
    console.error('Codolio API Error:', e.message);
    return res.status(500).json({ error: e.message });
  }
};