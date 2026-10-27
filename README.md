# DSA Grind

Mobile-first PWA: a spaced-repetition ladder for LeetCode patterns, with pomodoro time tracking, progress analytics, and optional LeetCode sync. Live at **https://dsa-grind-jet.vercel.app**.

## Stack
- `index.html` — the whole app (vanilla JS + CSS, no framework). Data (`P`, `W`, `S` — the 101 ladder problems) lives inside it.
- `api/sync.js` — serverless endpoint: bulk LeetCode history via `https://leetcode.com/api/submissions/` (paginated).
- `api/lc.js` — serverless endpoint: per-slug GraphQL call. Returns the last accepted submission (code, language, runtime, time) **and the last 20 submissions** (status/language/runtime/timestamps) for the problem's Submissions tab.
- `sw.js` — service worker (network-first; cache version bumped each deploy).

All tracking data lives in `localStorage` (`dsa-grind-v1`); cookies in `dsa-lc`. Nothing leaves the device except the cookie-forwarded LeetCode requests to your own endpoints. Export/import backups in Settings.

## Views
- **Today** — stat cards (focus time credited/actual + problem time), Overdue / Due today / Next 3 days as **accordion cards** (tap to expand the rows, counts always visible), New queue, Done today. The pomodoro lives in the small header pill.
- **Ladder** — the 101-problem pattern ladder with horizontal pattern tabs, progress bar, **two markers per row**: blue solve-tick + colored review tick (red ! = overdue, amber clock = due today, blue calendar = scheduled, green check = revised today), a **date badge** for the next review, and **Easy/Medium/Hard badges**. Legend is a single row; per-row LC runtime was removed.
- **Profile** — totals (problems solved, focus time credited ×mult, focus actual, problem-time stints), two 30-day **Chart.js** bar charts (tooltips show exact dates; SVG fallback offline), a month calendar of **pomodoro focus credited minutes** per day with a month summary line, and a **day dialog** (tap a day → modal with per-problem rows incl. each problem's own stint time).
- **Settings** — daily targets, pomodoro config, LeetCode sync + auto-sync, backups.

## Time accounting (documented)
- **Problem stints**: a timer runs while a problem modal is open and closes when you **Submit**, **Pull from LeetCode**, or **grade** it. Stored per day (`d[k].s`) and per problem (`p.time`); each closed stint is one entry in the problem's Submissions list.
- **Pomodoro**: focus sessions are logged (`d[k].f`, `ST.ses`); **rest minutes are not counted**. A partial focus (>60s) is logged on Reset.
- **Credited time** = **pomodoro focus only**: focus seconds × multiplier (`Settings → Bonus multiplier`, default **1.2**, so a 25-min focus counts as 30 min). Breaks and problem stints are **not** part of the profile/calendar/chart numbers.
- **Actual time** = the same pomodoro focus seconds, raw.
- **Problem time** is tracked separately **per solution** (`p.time`): every open→Submit/Pull/grade stint adds up, shown as "Xm here" on the day dialog rows and in the problem's Submissions list. Day dialogs show both: focus credited/actual *and* the summed problem stint time.
- **Revision/recall record**: every grade (easy/OK/hard/failed) is one revision iteration — stored in the problem's history `p.h` (with date, grade and time), shown as per-iteration entries in the Submissions tab ("OK ✓" chips) and summarized as "Recall iterations: N · last …" in Details.
- **Streak**: a day counts if you hit your New target or ≥25 focus minutes.
- **Problems per day**: problems graded here (unique ids) + problems found solved on LeetCode by sync, dated to their submission day (`d[k].qids`, deduped).

## LeetCode sync
1. Paste `LEETCODE_SESSION` + `csrftoken` in Settings → **Save cookies**.
2. **Test connection** pulls your Two Sum submission as a probe.
3. **Sync all problems**: bulk history first; if that fails/returns nothing it falls back to probing every ladder problem via `/api/lc`. Result is reported exactly (matched / stored / marked, or why nothing matched).
4. **Auto-sync** runs every N minutes (default 120, configurable) while the app is open, when cookies are present. Toggle in Settings.

Problems solved on LeetCode but not in the ladder get marked **“solved before”** and join the recall queue at 10/day (toggleable). Problems marked **🔒 Subscription needed** (Settings-less toggle inside each problem, under Details) leave the New queue but keep review-scheduling; Submit is disabled there, Pull still works.

## Editing & deploying
The app is assembled; edit the sources, not `index.html` directly:
```
cd C:/Users/maitr/AppData/Local/Temp/opencode
node asm3.js                 # assembles index.html from index.tpl3.html + style3.css + orig data
node --check app3.js         # syntax check
node smoke4.js               # 45-assertion regression suite
cd C:/Users/maitr/Downloads/dsa-grind
vercel --prod --yes          # deploy (bump sw.js cache const first)
```
Data blocks (`P`/`W`/`S`) are spliced byte-identical from `index.orig.html` — never retype them.
"# dsa-grind" 
