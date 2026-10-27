// Strivers A2Z Sheet API — reads/writes strivers-a2z.json via GitHub
// Codolio APIs are fetched ONCE and saved to JSON. No constant API calls.
// Completely separate from dsa-grind-2026-10-27.json (your ladder)

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const GITHUB_REPO = process.env.GITHUB_REPO || '';
const BRANCH = process.env.GITHUB_BRANCH || 'main';
const DATA_FILE = 'strivers-a2z.json';
const CODOLIO_BASE = 'https://node.codolio.com/api/question-tracker/v2/sheet';
const SHEET_SLUG = 'strivers-a2z-dsa-sheet';

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
    return {
      sheetSlug: SHEET_SLUG,
      sheetName: 'Strivers A2Z DSA Sheet',
      sheetLink: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/',
      stats: null,
      problems: [],
      userProgress: {},
      updatedAt: 0,
      fetchedAt: 0
    };
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
  return data;
}

// Fetch all problems from Codolio (topic by topic, paginated)
async function fetchAllCodolioData() {
  const statsRes = await fetch(`${CODOLIO_BASE}/get-sheet-stats/${SHEET_SLUG}`);
  const statsJson = await statsRes.json();
  const stats = statsJson.data;

  const allMappings = [];
  const topicList = Object.keys(stats.topics || {});

  for (const topicName of topicList) {
    const topicInfo = stats.topics[topicName];
    const subtopics = topicInfo.subtopics || {};

    // Fetch all questions for this topic
    let cursor = null;
    let page = 0;
    while (true) {
      page++;
      let url = `${CODOLIO_BASE}/get-sheet-data-by-slug/${SHEET_SLUG}?limit=100&topic=${encodeURIComponent(topicName)}`;
      if (cursor) url += `&cursor=${encodeURIComponent(cursor)}`;
      try {
        const resp = await fetchJson(url);
        const mappings = resp.data.mappings || [];
        mappings.forEach(m => allMappings.push({...m, _fetchedTopic: topicName}));
        if (!resp.data.pagination || !resp.data.pagination.hasNextPage) break;
        cursor = resp.data.pagination.nextCursor;
        if (page > 20) break;
      } catch (e) {
        break;
      }
    }

    // Fetch each subtopic
    for (const subTopicName of Object.keys(subtopics)) {
      cursor = null;
      page = 0;
      while (true) {
        page++;
        let url = `${CODOLIO_BASE}/get-sheet-data-by-slug/${SHEET_SLUG}?limit=100&topic=${encodeURIComponent(topicName)}&subTopic=${encodeURIComponent(subTopicName)}`;
        if (cursor) url += `&cursor=${encodeURIComponent(cursor)}`;
        try {
          const resp = await fetchJson(url);
          const mappings = resp.data.mappings || [];
          mappings.forEach(m => allMappings.push({...m, _fetchedTopic: topicName, _fetchedSubTopic: subTopicName}));
          if (!resp.data.pagination || !resp.data.pagination.hasNextPage) break;
          cursor = resp.data.pagination.nextCursor;
          if (page > 20) break;
        } catch (e) {
          break;
        }
      }
    }
  }

  // Deduplicate by mapping _id
  const seen = new Set();
  const unique = allMappings.filter(m => {
    if (seen.has(m._id)) return false;
    seen.add(m._id);
    return true;
  });

  // Build clean problem objects
  const problems = unique.map(m => {
    const qi = m.questionId || {};
    return {
      id: m._id,
      questionId: qi._id || '',
      slug: qi.slug || '',
      name: qi.name || m.title || '',
      title: m.title || qi.name || '',
      difficulty: qi.difficulty || 'Medium',
      problemUrl: qi.problemUrl || '',
      topic: m.topic || '',
      subTopic: m.subTopic || '',
      resource: m.resource || '',
      isSolved: m.isSolved || false,
      tags: qi.topics || [],
      verified: qi.verified || false
    };
  });

  return {
    sheetSlug: SHEET_SLUG,
    sheetName: 'Strivers A2Z DSA Sheet',
    sheetLink: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/',
    stats: stats,
    problems: problems,
    userProgress: {},
    updatedAt: Date.now(),
    fetchedAt: Date.now()
  };
}

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
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

    const { endpoint } = req.query || {};

    // --- READ: get all A2Z data from JSON file ---
    if (req.method === 'GET' && endpoint === 'read') {
      const data = await readData();
      return res.status(200).json(data);
    }

    // --- REFRESH: fetch all from Codolio and save to JSON ---
    if (req.method === 'GET' && endpoint === 'refresh') {
      const fullData = await fetchAllCodolioData();
      await writeData(fullData);
      return res.status(200).json({ ok: true, problems: fullData.problems.length, timestamp: Date.now() });
    }

    // --- PROGRESS GET: read user progress ---
    if (req.method === 'GET' && endpoint === 'progress') {
      const data = await readData();
      return res.status(200).json(data.userProgress || {});
    }

    // --- PROGRESS POST: save user progress ---
    if (req.method === 'POST' && endpoint === 'progress') {
      let body = req.body || {};
      if (typeof body === 'string') {
        try { body = JSON.parse(body); } catch { body = {}; }
      }
      if (!body || !body.problemId) {
        return res.status(400).json({ error: 'problemId required' });
      }

      const data = await readData();
      data.userProgress = data.userProgress || {};
      data.userProgress[body.problemId] = {
        ...(data.userProgress[body.problemId] || {}),
        problemId: body.problemId,
        status: body.status || 'attempted',
        solutionCode: body.solutionCode || '',
        timeSpent: body.timeSpent || 0,
        note: body.note || '',
        updatedAt: Date.now()
      };
      await writeData(data);
      return res.status(200).json({ ok: true });
    }

    // --- WRITE: save entire JSON (for import/backup) ---
    if (req.method === 'POST' && endpoint === 'write') {
      let body = req.body || {};
      if (typeof body === 'string') {
        try { body = JSON.parse(body); } catch { body = {}; }
      }
      const saved = await writeData(body);
      return res.status(200).json({ ok: true });
    }

    return res.status(400).json({ error: 'Invalid endpoint. Use ?endpoint=read|refresh|progress|write' });
  } catch (e) {
    console.error('Codolio API Error:', e.message);
    return res.status(500).json({ error: e.message });
  }
};