// Single source of truth: dsa-grind-2026-10-27.json in this repo
// Reads and writes via GitHub Contents API so the file persists across serverless invocations

const fs = require('fs');
const path = require('path');

const REPO = process.env.GITHUB_REPO || ''; // e.g. "username/dsa-grind"
const BRANCH = process.env.GITHUB_BRANCH || 'main';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const FILE_PATH = 'dsa-grind-2026-10-27.json';

async function githubRequest(url, method, body) {
  const headers = {
    'Accept': 'application/vnd.github+json',
    'Authorization': `Bearer ${GITHUB_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'dsa-grind-sync'
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

function readLocalFile() {
  try {
    const content = fs.readFileSync(path.join(process.cwd(), FILE_PATH), 'utf8');
    return JSON.parse(content);
  } catch (e) {
    return { p: {}, d: {}, c: { nt: 8, rt: 10 }, bk: "" };
  }
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (!GITHUB_TOKEN || !REPO) {
      // Fallback: local read only (no writes possible without GitHub config)
      if (req.method === 'GET') {
        return res.status(200).json(readLocalFile());
      }
      return res.status(500).json({ error: 'GitHub token and repo not configured. Set GITHUB_TOKEN and GITHUB_REPO env vars in Vercel.' });
    }

    const apiUrl = `https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`;

    if (req.method === 'GET') {
      const data = await githubRequest(apiUrl, 'GET');
      const content = Buffer.from(data.content, 'base64').toString('utf8');
      return res.status(200).json(JSON.parse(content));
    }

    if (req.method === 'PUT' || req.method === 'POST') {
      const newData = req.body;
      if (!newData || typeof newData !== 'object') {
        return res.status(400).json({ error: 'Invalid data: expected JSON object' });
      }

      // Ensure required fields
      if (!newData.p) newData.p = {};
      if (!newData.d) newData.d = {};
      if (!newData.c) newData.c = { nt: 8, rt: 10 };
      if (!newData.bk) newData.bk = "";

      // Get current file SHA (needed for GitHub update)
      let current;
      try {
        current = await githubRequest(apiUrl, 'GET');
      } catch (e) {
        current = null;
      }

      const body = {
        message: `Update dsa-grind data — ${new Date().toISOString()}`,
        content: Buffer.from(JSON.stringify(newData, null, 2)).toString('base64'),
        branch: BRANCH
      };
      if (current && current.sha) body.sha = current.sha;

      await githubRequest(apiUrl, 'PUT', body);
      return res.status(200).json({ ok: true, timestamp: Date.now() });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    console.error('API Error:', e.message);
    return res.status(500).json({ error: e.message });
  }
};