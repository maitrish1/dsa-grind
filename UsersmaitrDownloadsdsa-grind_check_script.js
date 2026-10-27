
var P=[
{n:"Read/write pointers",s:"Read",w:"One pointer reads every element; the other writes only what you keep. Reach for it when you see in place, remove, compress, or O(1) space.",t:[
["Move Zeroes", 283, "E", "Read scans everything; write marks the next slot for a keeper."],
["Remove Element", 27, "E", "Same loop, but the keep rule is an input value. Return write as the new length."],
["Remove Duplicates from Sorted Array", 26, "E", "The keep rule compares against the last kept value, nums[write-1]."],
["Remove Duplicates from Sorted Array II", 80, "M", "Allow k copies by comparing with nums[write-k]. One line covers every at-most-k version."],
["String Compression", 443, "M", "Read jumps over a whole run; write emits the char, then the count digit by digit."],
["Remove All Adjacent Duplicates in String", 1047, "E", "Write acts as a stack top: step it back when the new char cancels the last kept one."],
["Remove All Adjacent Duplicates in String II", 1209, "M", "Same stack-top write, plus a parallel count array: drop k chars at once."],
["Duplicate Zeros", 1089, "E", "Write runs ahead of read. Count first, then fill from the back so nothing is overwritten."]]},
{n:"Reverse in place",s:"Reverse",w:"Two ends swap and walk inward. Reach for it when you see reverse, rotate, flip, or mirror.",t:[
["Reverse String", 344, "E", "The base move: swap l and r, then step both inward until they meet."],
["Reverse Only Letters", 917, "E", "Skip characters that don't qualify before swapping."],
["Reverse Vowels of a String", 345, "E", "Same skip, with a lookup set as the qualify test."],
["Reverse String II", 541, "E", "Reverse in blocks: jump the start by 2k and clamp the end with min."],
["Reverse Words in a String III", 557, "E", "Find word boundaries yourself, then reuse your reverse routine on each word."],
["Reverse Words in a String", 151, "M", "Reverse everything, then reverse each word. Trim extra spaces on the way."],
["Rotate Array", 189, "M", "Three reversals: whole array, first k, then the rest. Take k % n first."],
["Rotate Image", 48, "M", "Transpose, then reverse each row. Two in-place moves compose into a rotation."]]},
{n:"Two-sequence scan",s:"Two seq",w:"One pointer per input; the comparison tells you which one to advance. Reach for it when you see merge, subsequence, or intersect.",t:[
["Merge Strings Alternately", 1768, "E", "One pointer per string, both moving each turn; append the leftover tail."],
["Is Subsequence", 392, "E", "The pointer on the long string always moves; the other moves only on a match."],
["Merge Two 2D Arrays by Summing Values", 2570, "E", "Your first forward merge: equal ids add their values, otherwise advance the smaller id."],
["Merge Sorted Array", 88, "E", "Fill from the back so the in-place target is never overwritten."],
["Intersection of Two Arrays II", 350, "E", "Sort both. Equal means emit and advance both; otherwise advance the smaller."],
["Backspace String Compare", 844, "E", "Scan both strings from the back with a skip counter for O(1) space."],
["Compare Version Numbers", 165, "M", "Parse each dot-separated chunk on the fly with two pointers; a missing chunk counts as 0."],
["Interval List Intersections", 986, "M", "Overlap is max(start) to min(end). Advance the pointer whose interval ends first."],
["Move Pieces to Obtain a String", 2337, "M", "Skip blanks in both strings. Pieces must match in order; L may only move left, R only right."],
["Largest Merge of Two Strings", 1754, "M", "Compare the whole remaining suffixes, not just the heads, to decide which char to take."]]},
{n:"Palindrome scans",s:"Palindrome",w:"Compare mirrored positions, or grow outward from a center. Reach for it when you see palindrome, mirror, or symmetric.",t:[
["Valid Palindrome", 125, "E", "Converge from both ends, skipping non-alphanumerics and ignoring case."],
["Valid Palindrome II", 680, "E", "One mismatch is allowed: branch into skip-left and skip-right, and test both."],
["Valid Palindrome IV", 2330, "E", "Generalize the allowance: count mismatches across the whole scan."],
["Lexicographically Smallest Palindrome", 2697, "E", "Mirror pairs: on a mismatch, set both to the smaller char and count the change."],
["Longest Palindromic Substring", 5, "M", "Flip the direction: expand outward from each center, for odd and even lengths."],
["Palindromic Substrings", 647, "M", "Same expansion, but count every success instead of tracking the longest."],
["Break a Palindrome", 1328, "M", "Only the first half matters; the middle char can't help."],
["Minimum Number of Moves to Make Palindrome", 2193, "H", "Greedy pairing: match the left char with its nearest copy from the right, counting swaps."]]},
{n:"Pair & tuple sums",s:"Pair sums",w:"Sort, then squeeze from both ends. For triples and more, fix one element and squeeze the rest.",t:[
["Two Sum", 1, "E", "Unsorted and you need indices: sorting loses them. Learn why a hash map wins, and what sorting would cost you."],
["Two Sum II", 167, "M", "Sorted input: sum too small moves left up, sum too big moves right down."],
["Two Sum Less Than K", 1099, "E", "No exact target: track the best sum below K while squeezing."],
["K-diff Pairs in an Array", 532, "M", "Both pointers move the same way, and the gap decides which one advances. Skip duplicates."],
["3Sum", 15, "M", "Fix one element, run Two Sum II on the rest, and dedupe all three positions."],
["3Sum Closest", 16, "M", "Same loop; track the closest sum instead of matching exactly."],
["Valid Triangle Number", 611, "M", "Fix the longest side. When a pair works, every index between l and r works too: add r - l."],
["4Sum", 18, "M", "Nest another loop or write a k-Sum recursion. Watch for integer overflow."],
["Number of Subsequences That Satisfy the Given Sum Condition", 1498, "M", "Sort. For each min, count 2^(r-l) subsets, using precomputed powers mod 1e9+7."],
["Find K-th Smallest Pair Distance", 719, "H", "Binary search the distance; two pointers count how many pairs fit within it."]]},
{n:"In-place partition",s:"Partition",w:"Pointers carve the array into zones, and you swap each element into the right zone. Reach for it when you see sort colors, pivot, or segregate.",t:[
["Sort Array By Parity", 905, "E", "Two-way partition: swap an odd on the left with an even on the right."],
["Separate Black and White Balls", 2938, "M", "Moving all 1s to the right: each swap costs a distance, so count it as you scan."],
["Sort Array By Parity II", 922, "E", "Two pointers on interleaved slots: one walks even indices, the other odd."],
["Sort Colors", 75, "M", "Three zones with low, mid, and high. Don't advance mid after swapping with high."],
["Partition Array According to Pivot", 2161, "M", "Stable three-way: less, equal, and greater groups written in order."],
["Rearrange Array Elements by Sign", 2149, "M", "Two write pointers: even slots for positives, odd slots for negatives, order preserved."],
["Sort an Array", 912, "M", "Lomuto partition: the pivot lands in its final spot, then recurse on each side."],
["Kth Largest Element in an Array", 215, "M", "Same partition, but recurse into only the side that holds index k (quickselect)."],
["Next Permutation", 31, "M", "Find the pivot from the right, swap with the next larger value, reverse the suffix."]]},
{n:"Greedy endpoint scan",s:"Greedy ends",w:"The ends hold the extremes, and a greedy rule decides which end to give up each step. Reach for it when you see sorted, maximize, or both ends.",t:[
["Squares of a Sorted Array", 977, "E", "The biggest squares sit at the ends. Compare them and fill the result from the back."],
["DI String Match", 942, "E", "I takes the smallest unused number, D takes the largest: low and high are your pointers."],
["Boats to Save People", 881, "M", "Sort. Pair heaviest with lightest if they fit; otherwise the heaviest goes alone."],
["Bag of Tokens", 948, "M", "The ends do different jobs: spend power on the cheapest token, trade score for power on the priciest."],
["Minimum Length of String After Deleting Similar Ends", 1750, "M", "Shrink only when both ends match, and strip the whole run of that char on each side."],
["Sentence Similarity III", 1813, "M", "Match the longest word-prefix and word-suffix; together they must cover the shorter sentence."],
["Container With Most Water", 11, "M", "Move the shorter wall. The width shrinks, so only a taller wall can improve the area."],
["Trapping Rain Water", 42, "H", "Track leftMax and rightMax, and always process the side with the smaller max."],
["Maximum Score of a Good Subarray", 1793, "H", "Start at k and expand outward toward the larger neighbor, tracking the running min."]]}
];

var W=[
{n:"Fixed-size window",s:"Fixed",w:"The window size never changes: add the element entering, drop the one leaving. Reach for it when you see subarray of size k, every window of length k, or exactly k elements.",t:[
["Maximum Average Subarray I", 643, "E", "Add the entering element, subtract the leaving one: O(1) per step instead of re-summing."],
["Maximum Number of Vowels in a Substring of Given Length", 1456, "M", "Same slide, but the tracked quantity is a count of a property (vowel or not) instead of a sum."],
["Contains Duplicate II", 219, "E", "The window holds a set: evict the element leaving, then check the one entering."],
["Maximum Sum of Distinct Subarrays With Length K", 2461, "M", "Track a running sum and a frequency map together; the window counts only when it has k distinct values."],
["Maximum Points You Can Obtain from Cards", 1423, "M", "Picking from the ends means leaving a window of n-k in the middle: slide it, or slide the split point."],
["Grumpy Bookstore Owner", 1052, "M", "Take the baseline first, then slide a window over only the extra gain you could unlock."],
["Permutation in String", 567, "M", "The window holds a frequency table; compare it with the target's table at each step."],
["Find All Anagrams in a String", 438, "M", "Same idea, but collect every start index. Keep a match counter so each step is O(1), not O(26)."],
["Maximum Number of Occurrences of a Substring", 1297, "M", "Ignore maxSize: a longer valid substring contains a valid minSize one at least as often. Slide a minSize window and count in a map."],
["Check If a String Contains All Binary Codes of Size K", 1461, "M", "The window becomes an integer: shift left, add the new bit, mask to k bits, and count distinct values against 2^k."],
["Sliding Window Maximum", 239, "H", "You need the max of every window: a monotonic deque keeps candidates in decreasing order."],
["Sliding Window Median", 480, "H", "Two heaps (or a sorted multiset) hold the lower and upper halves; remove the leaving element lazily and rebalance."],
["Substring with Concatenation of All Words", 30, "H", "Slide in word-sized steps, with an outer loop over each starting alignment."]]},
{n:"Variable-size window",s:"Variable",w:"The window grows on the right and shrinks on the left to stay valid, and you keep the longest. Reach for it when you see longest, at most k, or without repeating.",t:[
["Best Time to Buy and Sell Stock", 121, "E", "The window is [buy, sell]. When a new low appears, left jumps all the way to right."],
["Longest Substring Without Repeating Characters", 3, "M", "Grow right, and shrink with a while loop until the window is valid again; record the length after fixing."],
["Maximum Erasure Value", 1695, "M", "Sum and uniqueness together: shrink while the new value is a duplicate, subtracting the sum as you go."],
["Max Consecutive Ones III", 1004, "M", "Validity is a budget: at most k zeros inside. Shrink while over budget."],
["Longest Repeating Character Replacement", 424, "M", "Valid when window length minus the highest frequency is at most k. The window only grows or slides, never needs a full shrink."],
["Fruit Into Baskets", 904, "M", "At most 2 distinct types: validity is the size of the frequency map."],
["Longest Substring with At Most K Distinct Characters", 340, "M", "Generalize 2 to k with the same loop; delete a map key when its count reaches 0."],
["Get Equal Substrings Within Budget", 1208, "M", "Build the cost array |s[i] - t[i]| first, then it's the longest window with sum at most the budget."],
["Minimum Operations to Reduce X to Zero", 1658, "M", "Flip the problem: the longest middle subarray summing to total - x leaves the fewest elements taken from the ends."],
["Frequency of the Most Frequent Element", 1838, "M", "Sort. The window is valid when nums[r] * length - sum is at most k, since you raise everything to nums[r]."],
["Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit", 1438, "M", "Validity needs the window's max and min: use two monotonic deques, from Sliding Window Maximum."],
["Max Value of Equation", 1499, "H", "Rewrite the score as (yi - xi) + (xj + yj), then keep a monotonic deque of the best yi - xi within distance k."]]},
{n:"Count valid windows",s:"Count",w:"If a window is valid, every smaller window inside it is too. Count them with r - l + 1, or with atMost(k) minus atMost(k-1). Reach for it when you see number of subarrays or exactly k.",t:[
["Subarray Product Less Than K", 713, "M", "Once [l..r] is valid, r - l + 1 new subarrays end at r. Shrink while the product is too big, then add that count."],
["Number of Substrings Containing All Three Characters", 1358, "M", "Count 'at least' windows: for each r, every start up to the smallest last-seen index of a, b, c works."],
["Count the Number of Good Subarrays", 2537, "M", "Maintain a derived count as you slide: adding x creates cnt[x] new pairs, removing x deletes cnt[x] - 1. Count 'at least k pairs' windows."],
["Binary Subarrays With Sum", 930, "M", "Exact count = atMost(goal) - atMost(goal - 1). Handle goal = 0 with care."],
["Count Number of Nice Subarrays", 1248, "M", "Turn odd numbers into 1 and evens into 0, and it becomes Binary Subarrays With Sum."],
["Number of Subarrays with Bounded Maximum", 795, "M", "A range counts as a difference too: atMost(right) minus atMost(left - 1), applied to the max."],
["Count Subarrays With Fixed Bounds", 2444, "H", "No shrinking: track the last index of minK, of maxK, and of the last out-of-range element."],
["Subarrays with K Different Integers", 992, "H", "The same atMost difference with a frequency map: the hardest standard exact-k count."]]},
{n:"Minimum window",s:"Minimum",w:"Grow until the window is valid, then shrink as far as it stays valid, recording the smallest. Reach for it when you see shortest, smallest, or minimum window.",t:[
["Minimum Size Subarray Sum", 209, "M", "Flip the rule: while the window is valid, record its length, then shrink. Needs non-negative numbers."],
["Minimum Consecutive Cards to Pick Up", 2260, "M", "The window is valid once it has a duplicate; shrink from the left while it still does, recording the length each time."],
["Minimum Window Substring", 76, "H", "Need/have counters: shrink while every required char is covered, tracking the best start and length."],
["Replace the Substring for Balanced String", 1234, "M", "Validity is about what's outside the window: the remaining counts must each be at most n/4."],
["Minimum Window Subsequence", 727, "H", "Order matters now: scan forward to find an end, then walk backward to the tightest start."],
["Shortest Subarray with Sum at Least K", 862, "H", "Negatives break shrink-while-valid. Use prefix sums with a monotonic deque instead."]]}
];

var S={"1297":"maximum-number-of-occurrences-of-a-substring","1461":"check-if-a-string-contains-all-binary-codes-of-size-k","480":"sliding-window-median","1695":"maximum-erasure-value","1499":"max-value-of-equation","2537":"count-the-number-of-good-subarrays","2260":"minimum-consecutive-cards-to-pick-up","643":"maximum-average-subarray-i","1456":"maximum-number-of-vowels-in-a-substring-of-given-length","219":"contains-duplicate-ii","2461":"maximum-sum-of-distinct-subarrays-with-length-k","1423":"maximum-points-you-can-obtain-from-cards","1052":"grumpy-bookstore-owner","567":"permutation-in-string","438":"find-all-anagrams-in-a-string","239":"sliding-window-maximum","30":"substring-with-concatenation-of-all-words","121":"best-time-to-buy-and-sell-stock","3":"longest-substring-without-repeating-characters","1004":"max-consecutive-ones-iii","424":"longest-repeating-character-replacement","904":"fruit-into-baskets","340":"longest-substring-with-at-most-k-distinct-characters","1208":"get-equal-substrings-within-budget","1658":"minimum-operations-to-reduce-x-to-zero","1838":"frequency-of-the-most-frequent-element","1438":"longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit","713":"subarray-product-less-than-k","1358":"number-of-substrings-containing-all-three-characters","930":"binary-subarrays-with-sum","1248":"count-number-of-nice-subarrays","795":"number-of-subarrays-with-bounded-maximum","2444":"count-subarrays-with-fixed-bounds","992":"subarrays-with-k-different-integers","209":"minimum-size-subarray-sum","76":"minimum-window-substring","1234":"replace-the-substring-for-balanced-string","727":"minimum-window-subsequence","862":"shortest-subarray-with-sum-at-least-k","283": "move-zeroes", "27": "remove-element", "26": "remove-duplicates-from-sorted-array", "80": "remove-duplicates-from-sorted-array-ii", "443": "string-compression", "1047": "remove-all-adjacent-duplicates-in-string", "1209": "remove-all-adjacent-duplicates-in-string-ii", "1089": "duplicate-zeros", "344": "reverse-string", "917": "reverse-only-letters", "345": "reverse-vowels-of-a-string", "541": "reverse-string-ii", "557": "reverse-words-in-a-string-iii", "151": "reverse-words-in-a-string", "189": "rotate-array", "48": "rotate-image", "1768": "merge-strings-alternately", "392": "is-subsequence", "2570": "merge-two-2d-arrays-by-summing-values", "88": "merge-sorted-array", "350": "intersection-of-two-arrays-ii", "844": "backspace-string-compare", "165": "compare-version-numbers", "986": "interval-list-intersections", "2337": "move-pieces-to-obtain-a-string", "1754": "largest-merge-of-two-strings", "125": "valid-palindrome", "680": "valid-palindrome-ii", "2330": "valid-palindrome-iv", "2697": "lexicographically-smallest-palindrome", "5": "longest-palindromic-substring", "647": "palindromic-substrings", "1328": "break-a-palindrome", "2193": "minimum-number-of-moves-to-make-palindrome", "1": "two-sum", "167": "two-sum-ii-input-array-is-sorted", "1099": "two-sum-less-than-k", "532": "k-diff-pairs-in-an-array", "15": "3sum", "16": "3sum-closest", "611": "valid-triangle-number", "18": "4sum", "1498": "number-of-subsequences-that-satisfy-the-given-sum-condition", "719": "find-k-th-smallest-pair-distance", "905": "sort-array-by-parity", "2938": "separate-black-and-white-balls", "922": "sort-array-by-parity-ii", "75": "sort-colors", "2161": "partition-array-according-to-given-pivot", "2149": "rearrange-array-elements-by-sign", "912": "sort-an-array", "215": "kth-largest-element-in-an-array", "31": "next-permutation", "977": "squares-of-a-sorted-array", "942": "di-string-match", "881": "boats-to-save-people", "948": "bag-of-tokens", "1750": "minimum-length-of-string-after-deleting-similar-ends", "1813": "sentence-similarity-iii", "11": "container-with-most-water", "42": "trapping-rain-water", "1793": "maximum-score-of-a-good-subarray"};

var TOPICS=[P,W],ALLP=[],BY={},SL={};
TOPICS.forEach(function(T,ti){T.forEach(function(pt){pt.t.forEach(function(q){var o={id:q[1],t:q[0],d:q[2],x:q[3],pat:pt.n};ALLP.push(o);BY[o.id]=o})})});
Object.keys(S).forEach(function(k){SL[S[k]]=+k});
var $=function(i){return document.getElementById(i)},K="dsa-grind-v1",INT=[1,3,7,14,30,60],V="today",TP=0,CUR=0,T0=0,TM=null,PC=null,SYNCING=false;
// ===== HARDCODED LEETCODE COOKIES (same on every device) =====
// Paste your LEETCODE_SESSION and csrftoken here:
var LC={
  s:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfYXV0aF91c2VyX2lkIjoiMzExMDk3MiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImFsbGF1dGguYWNjb3VudC5hdXRoX2JhY2tlbmRzLkF1dGhlbnRpY2F0aW9uQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6ImRjYzUwOWQ0NzFiZGE4ZGY1MGViNGIyMmVmNmFiZDMyNjI2MWQ2NGUyN2U4MWFiOTUwYzRlMTEzNGZlODFlYWYiLCJzZXNzaW9uX3V1aWQiOiI1YmRmZjJjNiIsImlkIjozMTEwOTcyLCJlbWFpbCI6Im1haXRyaXNoMDNAZ21haWwuY29tIiwidXNlcm5hbWUiOiJtYWl0cmlzaDAzIiwidXNlcl9zbHVnIjoibWFpdHJpc2gwMyIsImF2YXRhciI6Imh0dHBzOi8vYXNzZXRzLmxlZXRjb2RlLmNvbS91c2Vycy9tYWl0cmlzaDAzL2F2YXRhcl8xNTkzNzAwNjgyLnBuZyIsInJlZnJlc2hlZF9hdCI6MTc5MzA5NzM5NSwiaXAiOiIxMDMuMjUyLjE2NS4yNTAiLCJpZGVudGl0eSI6IjVkMGRkNDI1MDA4ZDczMjhjZmY5Y2NlNDg5ZmI1NWY3IiwiZGV2aWNlX3dpdGhfaXAiOlsiMWFkY2Q2YWNkNGJjMDljODE3ODk4NjQ4YmEyODY4MGQiLCIxMDMuMjUyLjE2NS4yNTAiXX0.2lW9zV3jKqOo1urtVULzBnR365TTq-P7hkmtTejDkrU",
  c:"a1ocyUyjIxbTxiK3WpFBzDv3EIzpOtVo"
};

// ============================================
// SINGLE SOURCE OF TRUTH: dsa-grind-2026-10-27.json
// All reads/writes go through /api/data which persists to this JSON file.
// localStorage is ONLY an offline read cache — never the source of truth.
// ============================================
var ST = {p:{},d:{},c:{nt:8,rt:10},bk:"",pi:{0:0,1:0},lc:{},dr:{},ses:[],lock:{},lsub:{},pom:{ph:"idle",st:0,rem:0,pa:false}};
var DIFF={E:"Easy",M:"Medium",H:"Hard"};

// Default config values (merged with server data)
var DEFAULTS = {
  c: {nt:8, rt:10, pf:25, pr:5, mult:1.2, si:120, bg:1, at:1},
  pi: {0:0, 1:0}
};

function mergeDefaults(data) {
  data = data || {};
  data.p = data.p || {};
  data.d = data.d || {};
  data.c = {...DEFAULTS.c, ...(data.c||{})};
  data.pi = {...DEFAULTS.pi, ...(data.pi||{})};
  data.lc = data.lc || {};
  data.dr = data.dr || {};
  data.ses = data.ses || [];
  data.lock = data.lock || {};
  data.lsub = data.lsub || {};
  data.pom = data.pom || {ph:"idle",st:0,rem:0,pa:false};
  data.bk = data.bk || "";
  return data;
}

// Load from API — the JSON file is the only source of truth
async function loadFromAPI() {
  try {
    const res = await fetch('/api/data', {cache: 'no-store'});
    if (res.ok) {
      const data = await res.json();
      ST = mergeDefaults(data);
      // Only override hardcoded cookies if JSON actually has real ones
      if (ST.lc && ST.lc.s && ST.lc.c) LC = ST.lc;
      // Offline cache (read-only fallback, never written to as primary)
      try { localStorage.setItem(K, JSON.stringify(ST)); } catch(e) {}
      return true;
    }
  } catch (e) {
    console.warn('API load failed:', e);
  }
  // Offline fallback: read from cache only if API unreachable
  try {
    const s = JSON.parse(localStorage.getItem(K) || '{}');
    if (s && s.p) {
      ST = mergeDefaults(s);
      if (s.lc && s.lc.s && s.lc.c) LC = s.lc;
      return true;
    }
  } catch (e) {}
  return false;
}

// Save to API — persists to the JSON file (single source of truth)
async function save() {
  // Sync LC into ST before writing
  ST.lc = LC;

  // Persist to API (writes to dsa-grind-2026-10-27.json)
  try {
    await fetch('/api/data', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(ST)
    });
    // Update offline cache after successful write
    try { localStorage.setItem(K, JSON.stringify(ST)); } catch(e) {}
  } catch (e) {
    console.warn('API save failed (offline):', e);
    // Queue for retry when back online
    if (!window._saveQueue) window._saveQueue = [];
    window._saveQueue.push({data: JSON.parse(JSON.stringify(ST)), time: Date.now()});
  }
}

// Retry queued saves when back online
function flushSaveQueue() {
  if (!window._saveQueue || !window._saveQueue.length) return;
  const queue = window._saveQueue;
  window._saveQueue = [];
  queue.forEach(function(item){ save(); });
}

window.addEventListener('online', flushSaveQueue);
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function ymd(d){d=d||new Date();return d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2)}
function plus(n){var d=new Date();d.setDate(d.getDate()+n);return ymd(d)}
function gap(a,b){return Math.round((new Date(b)-new Date(a))/864e5)}
function day(k){return ST.d[k]||(ST.d[k]={n:0,r:0,s:0,ids:[],f:0,qids:[]})}
function hm(s){return (s/3600|0)+"h "+(s%3600/60|0)+"m"}
function mm(s){return (s/60|0)+"m "+(s%60|0)+"s"}
function mmss(s){s=Math.max(0,Math.round(s));return ("0"+(s/60|0)).slice(-2)+":"+("0"+s%60).slice(-2)}
function streak(){var n=0;for(var i=0;i<400;i++){var x=ST.d[plus(-i)];if(x&&(x.n>=ST.c.nt||x.f>=1500))n++;else if(i>0)break}return n}
function queue(){var t=ymd();
 var rec=Object.keys(ST.p).map(function(k){return ST.p[k]}).filter(function(p){return p.due&&p.due<=t}).map(function(p){var f=p.h.filter(function(x){return x.g==="failed"||x.g==="hard"}).length;return{id:p.id,s:gap(p.due,t)*2+(5-p.b)+f*3}}).sort(function(a,b){return b.s-a.s}).map(function(o){return o.id});
 var nw=ALLP.filter(function(q){var p=ST.p[q.id];return (!p||(!p.due&&!p.old))&&!ST.lock[q.id]}).map(function(q){return q.id});
 return{rec:rec,nw:nw,dd:day(t)}}
function tick(){return '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4.6 10.6l3.4 3.4L15.4 6.4"/></svg>'}
function pstat(id){var p=ST.p[id];return !p?"none":p.code?"saved":"tracked"}
function isLock(id){return ST.lock[id]===1}
var ICO={
 clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
 flame:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c1.2 3.2-1.6 4.6-1.6 7.2A2.3 2.3 0 0 0 14 10.6c1.4 1.2 2.5 2.9 2.5 4.9A5.6 5.6 0 0 1 6 15.7C6 11.3 10.6 9.6 10.8 5.4 11.2 4.3 12 3 12 3z"/></svg>',
 lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7.5a4 4 0 0 1 8 0V11"/></svg>',
 over:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5"/><path d="M12 16.2h.01"/></svg>',
 cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/></svg>',
 checkC:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.4 12.2l2.5 2.5 4.7-5.2"/></svg>',
 ring:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9" stroke-dasharray="4 5"/></svg>',
 chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 5.5l6.5 6.5-6.5 6.5"/></svg>',
 left:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 5.5L8 12l6.5 6.5"/></svg>',
 right:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 5.5l6.5 6.5-6.5 6.5"/></svg>',
 play:'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8.5 5.2v13.6l11-6.8z"/></svg>',
 pause:'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="7" y="5" width="3.6" height="14" rx="1.1"/><rect x="13.4" y="5" width="3.6" height="14" rx="1.1"/></svg>',
 rst:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 10.5a8 8 0 1 1 1.8 5.4"/><path d="M4.5 5.5v5h5"/></svg>',
 x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>'};
function rtick(id){
 var p=ST.p[id],t=ymd();
 if(!p||!p.due)return '<span class="rtick off">'+ICO.ring+'</span>';
 var last=p.h&&p.h[p.h.length-1],done=last&&last.at&&ymd(new Date(last.at))===t;
 if(done&&p.due>=t)return '<span class="rtick ok" title="Reviewed today">'+ICO.checkC+'</span>';
 if(p.due<t)return '<span class="rtick bad" title="'+gap(p.due,t)+' days overdue">'+ICO.over+'</span>';
 if(p.due===t)return '<span class="rtick warn" title="Review due today">'+ICO.clock+'</span>';
 return '<span class="rtick soon" title="Next review '+p.due.slice(5)+'">'+ICO.cal+'</span>'}
function meta(id,mode){var q=BY[id],p=ST.p[id];
 if(mode==="r"){if(!p)return "due";var m2=p.due<t0()?gap(p.due,t0())+"d overdue":"due today";if(!p.code)m2+=" · no code saved";return m2}
 if(mode==="d"){var g=p&&p.h&&p.h.length?p.h[p.h.length-1].g:"done";return ({easy:"graded easy",ok:"graded OK",hard:"graded hard",failed:"graded failed",synced:"code synced",local:"submitted"}[g]||"done")}
 if(mode==="n")return "#"+id;
 if(p){var bits=[];if(p.code)bits.push("code saved");if(p.time)bits.push(mm(p.time)+" here");bits.length||bits.push("tracked");return bits.join(" · ")}
 return ""}
function t0(){return ymd()}
function rowHTML(id,sub,right){
 var q=BY[id],p=ST.p[id],t=ymd(),rvb="";
 if(p&&p.due){var last=p.h&&p.h[p.h.length-1],done=last&&last.at&&ymd(new Date(last.at))===t;
  if(done&&p.due>=t)rvb='<span class="rbadge ok">revised</span>';
  else if(p.due<t)rvb='<span class="rbadge bad">'+gap(p.due,t)+'d overdue</span>';
  else{var u=gap(t,p.due);rvb='<span class="rbadge '+(u<=3?"soon":"")+'">'+p.due.slice(5)+'</span>'}}
 return '<div class="row'+(isLock(id)?" locked":"")+'" data-id="'+id+'" role="button" tabindex="0" aria-label="Open '+esc(q.t)+'">'+
  '<span class="tick" data-s="'+pstat(id)+'">'+tick()+'</span>'+
  rtick(id)+
  '<span class="row-main"><span class="row-t">'+esc(q.t)+' <span class="dchip '+q.d.toLowerCase()+'">'+DIFF[q.d]+'</span>'+(isLock(id)?' <span class="lock-mini" title="Subscription needed">'+ICO.lock+'</span>':"")+'</span><span class="row-m">'+sub+'</span></span>'+
  rvb+(right||'<span class="chev" aria-hidden="true">'+ICO.chev+'</span>')+'</div>'}
function items(ids,mode){
 if(!ids.length)return '<p class="empty">Nothing here right now.</p>';
 return ids.map(function(id){return rowHTML(id,meta(id,mode))}).join("")}
function statCard(l,v,pct,col,sub){
 return '<div class="st"><span>'+l+'</span><b>'+v+'</b>'+(sub?'<em class="stx">'+esc(sub)+'</em>':'')+(pct>0?'<i><em style="width:'+Math.min(100,Math.round(pct*100))+'%;background:'+col+'"></em></i>':'')+'</div>'}
function CMUL(){return +ST.c.mult||1.2}
function credMin(d){return d?(d.s+Math.round((d.f||0)*CMUL()))/60:0}
function actMin(d){return d?(d.s+(d.f||0))/60:0}
function pomLen(ph){return ((ph==="rest")?(+ST.c.pr||5):(+ST.c.pf||25))*60}
var TST=null;
function toast(m){var t=$("toast");if(!t)return;t.textContent=m;t.hidden=false;
 requestAnimationFrame(function(){t.classList.add("on")});
 clearTimeout(TST);TST=setTimeout(function(){t.classList.remove("on");setTimeout(function(){t.hidden=true},250)},3200)}
function alarm(){try{var A=new (window.AudioContext||window.webkitAudioContext)();if(!A)return;
 [0,.34,.68].forEach(function(off){var o=A.createOscillator(),g=A.createGain();
  o.connect(g);g.connect(A.destination);o.type="sine";o.frequency.value=880;
  var t2=A.currentTime+off;g.gain.setValueAtTime(.0001,t2);g.gain.exponentialRampToValueAtTime(.22,t2+.02);
  g.gain.exponentialRampToValueAtTime(.0001,t2+.22);o.start(t2);o.stop(t2+.24)})}catch(e){}}
function logSes(ph,du){ST.ses.push({at:Date.now(),ph:ph,du:du});if(ph==="focus"){day(ymd()).f+=du}save()}
function pomLeft(){var d=ST.pom||{},ph=d.ph||"idle",len=pomLen(ph==="rest"?"rest":"focus");
 if(ph==="idle")return pomLen("focus");
 return Math.max(0,len-(d.pa?len-(d.rem||0):Math.floor((Date.now()-d.st)/1000)))}
function pomRender(){var d=ST.pom||{},ph=d.ph||"idle",b=$("pomBox");if(!b)return;
 $("pPh").textContent=ph==="focus"?"Focus":ph==="rest"?"Rest":"Idle";
 $("pTm").textContent=mmss(pomLeft());
 $("pBtn").innerHTML=d.pa?ICO.pause:(ph==="idle"?ICO.play:ICO.pause);
 b.className="ppill"+(ph==="focus"?" f":ph==="rest"?" r":"")}
function pomBtn(){var d=ST.pom||{},len;
 if(d.ph==="idle"){ST.pom={ph:"focus",st:Date.now(),rem:0,pa:false};save()}
 else if(d.pa){len=pomLen(d.ph);ST.pom.st=Date.now()-(len-(d.rem||0))*1000;ST.pom.pa=false;save()}
 else{len=pomLen(d.ph);ST.pom.rem=Math.max(0,len-Math.floor((Date.now()-d.st)/1000));ST.pom.pa=true;save()}
 pomTick()}
function pomRs(){var d=ST.pom||{};
 if(d.ph==="focus"&&!d.pa&&d.st){var el=Math.floor((Date.now()-d.st)/1000);
  if(el>60){logSes("focus",el);toast("Partial pomodoro logged — "+mm(el))}}
 ST.pom={ph:"idle",st:0,rem:0,pa:false};save();pomTick()}
function pomTick(){var d=ST.pom||{};if(d.ph==="idle"){pomRender();return}
 var len=pomLen(d.ph),el=d.pa?(len-(d.rem||0)):Math.floor((Date.now()-d.st)/1000);
 if(el>=len){logSes(d.ph,len);
  if(d.ph==="focus"){alarm();toast("Pomodoro done ✓ "+mm(Math.round(len*CMUL()))+" credited — rest starting");
   ST.pom={ph:"rest",st:Date.now(),rem:0,pa:false}}
  else{alarm();toast("Break over — back to the ladder");ST.pom={ph:"idle",st:0,rem:0,pa:false}}
  save();pomRender();return}
 pomRender()}
var ACC={};
function acc(cls,icon,title,count,sub,inner,key,dd){
 return '<section class="acc '+cls+(ACC[key]?" open":"")+'"><button class="acc-h '+cls+'" data-acc="'+key+'" aria-expanded="'+(!!ACC[key])+'" aria-label="'+esc(title)+" ("+count+')">'+icon+'<span class="acc-t"><b>'+esc(title)+'</b>'+(sub?'<small>'+esc(sub)+'</small>':'')+'</span><em>'+count+'</em><span class="acc-ic'+(ACC[key]?" flip":"")+'" data-a-ic>'+ICO.chev+'</span></button><div class="acc-b"'+(ACC[key]?"":" hidden")+'>'+inner+'</div></section>'}
function today(){
 var q=queue(),c=ST.c,dd=q.dd,sk=streak(),h='',t=ymd();
 h+='<div class="hero"><div><p class="eyebrow">'+new Date().toLocaleDateString(undefined,{weekday:"long",month:"short",day:"numeric"})+'</p><h1>Today</h1></div></div>';
 var fcr=Math.round((dd.f||0)*CMUL()/60);
 h+='<div class="stats">'+statCard("New",dd.n+"/"+c.nt,dd.n/c.nt,"var(--ac)")+statCard("Recall",dd.r+"/"+c.rt,dd.r/c.rt,"var(--ok)")+statCard("Focus time",fcr+"m credited",0,"var(--mk)",Math.round((dd.f||0)/60)+"m actual"+(dd.s?" · "+mm(dd.s)+" on problems":""))+'</div>';
 var all=Object.keys(ST.p).map(function(k){return ST.p[k]}).filter(function(p){return p.due&&p.due<=t});
 var od=all.filter(function(p){return p.due<t}).map(function(p){return p.id}),dt=all.filter(function(p){return p.due===t}).map(function(p){return p.id});
 if(od.length){var worst=0;od.forEach(function(id){var g=gap(ST.p[id].due,t);if(g>worst)worst=g});
  h+=acc("ab",ICO.over+'<i class="pulse" aria-hidden="true"></i>',"Overdue",od.length,worst+"d oldest",items(od,"r"),"od")}
 if(dt.length)h+=acc("hw",ICO.clock,"Due today",dt.length,"",items(dt,"r"),"dt");
 var soon=Object.keys(ST.p).map(function(k){return ST.p[k]}).filter(function(p){return p.due&&p.due>t&&gap(t,p.due)<=3}).sort(function(a,b){return a.due<b.due?-1:1}).map(function(p){return p.id});
 if(soon.length)h+=acc("hs",ICO.cal,"Next 3 days",soon.length,"next "+ST.p[soon[0]].due.slice(5),items(soon,"r"),"sn");
 var rec=Object.keys(ST.p).map(function(k){return ST.p[k]}).filter(function(p0){var l=p0.h&&p0.h[p0.h.length-1];return l&&l.at&&ymd(new Date(l.at))===t&&(l.g==="easy"||l.g==="ok"||l.g==="hard"||l.g==="failed")}).map(function(p0){return p0.id});
 if(rec.length)h+=acc("hg",ICO.checkC,"Recalled today",rec.length,"",items(rec,"r"),"rd");
 if(!od.length&&!dt.length)h+='<p class="empty ok-e">No recalls due — clean slate.</p>';
 var nl=Math.max(0,c.nt-dd.n);
 h+='<h3>New</h3>'+items(q.nw.slice(0,nl),"n");
 if(dd.ids.length)h+='<h3>Done today</h3>'+items(dd.ids.map(function(x){return x.id}),"d");
 h+='<div class="hint lg"><span class="lgi"><span class="tick demo" data-s="saved">'+tick()+'</span>solve state</span><span class="lgi"><span class="rtick bad">'+ICO.over+'</span>overdue</span><span class="lgi"><span class="rtick warn">'+ICO.clock+'</span>due today</span><span class="lgi"><span class="rtick soon">'+ICO.cal+'</span>scheduled</span><span class="lgi"><span class="rtick ok">'+ICO.checkC+'</span>revised</span><span class="lgi"><span class="dchip e">Easy</span><span class="dchip m">Medium</span><span class="dchip h">Hard</span>difficulty</span></div>';
 h+='<p class="hint">Tap a card to expand it. The next-review date shows as a badge beside each row.</p>';
 return h}
function ladder(){
 var tp=TOPICS[TP],pi=ST.pi[TP]||0,pt=tp[pi],done=0,tot=0;
 tp.forEach(function(x){x.t.forEach(function(q){tot++;if(ST.p[q[1]])done++})});
 var h='<div class="hero"><div><p class="eyebrow">Pattern ladder</p><h1>Ladder</h1></div></div>';
 h+='<div class="seg" role="group" aria-label="Topic"><button data-tp="0" aria-pressed="'+(TP==0)+'">Two pointers</button><button data-tp="1" aria-pressed="'+(TP==1)+'">Sliding window</button></div>';
 h+='<div class="prog"><div class="bar"><i style="width:'+(tot?100*done/tot:0)+'%"></i></div><div class="tot"><span>'+done+' of '+tot+' started in this topic</span><span>'+(tot?Math.round(100*done/tot):0)+'%</span></div></div>';
 h+='<div class="ptabs" role="tablist" aria-label="Patterns">';
 tp.forEach(function(x,i){var d=0;x.t.forEach(function(q){if(ST.p[q[1]])d++});
  h+='<button class="ptab" role="tab" data-pi="'+i+'" aria-selected="'+(i==pi)+'">'+(d>=x.t.length?'<span class="ok-dot" aria-hidden="true"></span>':'')+esc(x.s)+'<em>'+d+'/'+x.t.length+'</em></button>'});
 h+='</div>';
 h+='<section class="card pat"><div class="pat-h"><h2>'+esc(pt.n)+'</h2><p class="sub">'+esc(pt.w)+'</p></div><div class="list">';
 pt.t.forEach(function(q){var id=q[1],p=ST.p[id],right;
  if(!p)right=isLock(id)?'<span class="chev" aria-hidden="true">'+ICO.chev+'</span>':'<button class="mini" data-bf="'+id+'">Solved before</button>';
  h+=rowHTML(id,meta(id),right)});
 h+='</div></section>';
 h+='<div class="hint lg"><span class="lgi"><span class="tick demo" data-s="saved">'+tick()+'</span>solve state</span><span class="lgi"><span class="rtick bad">'+ICO.over+'</span>overdue</span><span class="lgi"><span class="rtick warn">'+ICO.clock+'</span>due today</span><span class="lgi"><span class="rtick soon">'+ICO.cal+'</span>scheduled</span><span class="lgi"><span class="rtick ok">'+ICO.checkC+'</span>revised</span><span class="lgi"><span class="dchip e">Easy</span><span class="dchip m">Medium</span><span class="dchip h">Hard</span></span></div>';
 h+='<p class="hint">Each row: blue tick = solve state, colored tick = review state, date badge = next review. Lock icons mark subscription-needed problems. Tap “Solved before” for everything done since Oct 3 — those join recall at 10 per day.</p>';
 return h}
function barsSVG(vals,col){
 var n=vals.length,mx=1,sum=0;
 for(var i=0;i<n;i++){if(vals[i]>mx)mx=vals[i]+0.0001;sum+=vals[i]}
 var avg=Math.round(sum/n*10)/10,W=340,H=124,plot=78,step=W/n;
 function gy(v){return (plot-v/mx*plot).toFixed(1)}
 var out='<svg class="chart" viewBox="0 0 '+W+' '+H+'" preserveAspectRatio="none" role="img">';
 out+='<g stroke="var(--ln)" stroke-width="1"><line x1="0" y1="'+gy(mx)+'" x2="'+W+'" y2="'+gy(mx)+'"/></g>';
 out+='<line x1="0" y1="'+(plot+.5)+'" x2="'+W+'" y2="'+(plot+.5)+'" stroke="var(--ln)" stroke-width="1"/>';
 if(avg>=.5)out+='<line x1="0" y1="'+gy(Math.max(avg,.5))+'" x2="'+W+'" y2="'+gy(Math.max(avg,.5))+'" stroke="var(--mu)" stroke-width="1" stroke-dasharray="3 4"/>';
 for(i=0;i<n;i++){var v=vals[i],bh=Math.round(v/mx*plot);bh=v>0?Math.max(3,bh):0;
  out+='<rect class="bar'+(i===n-1?" now":"")+'" x="'+(i*step+1.5).toFixed(1)+'" y="'+(plot-bh)+'" width="'+(step-3).toFixed(1)+'" height="'+bh+'" rx="2.5" fill="var(--'+col+')"/>'}
 out+='<g font-size="6.5" fill="var(--mu)">';
 var labDays=[0,5,10,15,20,25,n-1];
 for(i=0;i<n;i++){var off=n-1-i,show=false;
  for(var j=0;j<labDays.length;j++){if(i===labDays[j])show=true}
  if(show){var dt2=new Date();dt2.setDate(dt2.getDate()-off);
   out+='<text x="'+(i*step+step/2).toFixed(1)+'" y="'+(plot+12)+'" text-anchor="middle">'+(i===n-1?"today":dt2.getDate())+'</text>'}}
 out+='<text x="1" y="9" font-size="6.5">max '+Math.round(mx)+'</text>';
 if(avg>=.5){var ay=plot-Math.max(avg,.5)/mx*plot-3;
  out+='<text x="'+(W-1)+'" y="'+ay.toFixed(1)+'" text-anchor="end" font-size="6.5" fill="var(--mu)">avg '+avg+'</text>'}
 out+='</g></svg>';
 return out}
function cntDay(k){var dd=ST.d[k];if(!dd)return 0;var u={};(dd.ids||[]).forEach(function(x){u[x.id]=1});(dd.qids||[]).forEach(function(x){u[x]=1});return Object.keys(u).length}
function pRow(id){
 if(!BY[id])return '<div class="row off"><span class="tick" data-s="none">'+tick()+'</span><span class="row-main"><span class="row-t">#'+esc(String(id))+'</span><span class="row-m">solved on LeetCode</span></span></div>';
 var p=ST.p[id],sub=p?(p.code?"code saved"+(p.time?" · "+mm(p.time)+" here":""):(p.time?mm(p.time)+" here":"tracked")):"";
 return rowHTML(id,sub)}
function dayOpen(k){
 var dlg=$("pdDlg");if(!dlg)return;
 if(k==="x"){dlg.hidden=true;return}
 var dd=ST.d[k],cnt=0,st=0,pr={};
 (dd&&dd.ids||[]).forEach(function(x){pr[x.id]=1});
 (dd&&dd.qids||[]).forEach(function(x){pr[x]=1});
 var ids=Object.keys(pr);
 ST.ses.forEach(function(s){if(ymd(new Date(s.at))===k){cnt++;if(s.ph==="focus")st+=s.du}});
 $("pdX").innerHTML=ICO.x;
 $("pdH").textContent=new Date(k+"T12:00:00").toLocaleDateString(undefined,{weekday:"long",month:"long",day:"numeric"});
 $("pdB").innerHTML='<div class="stats"><div class="st"><span>Problems solved</span><b>'+ids.length+'</b></div><div class="st"><span>Focus credited</span><b>'+Math.round((dd?(dd.f||0)*CMUL()/60:0))+'m</b></div><div class="st"><span>Focus actual</span><b>'+Math.round((dd?(dd.f||0)/60:0))+'m</b></div></div>'+
 '<p class="chip">Focus sessions: '+cnt+(st?' ('+mm(st)+')':'')+' · problem stint time: '+mm(dd?(dd.s||0):0)+' · graded new: '+(dd?dd.n:0)+' · recall: '+(dd?dd.r:0)+' · from LeetCode: '+(dd?(dd.qids||[]).length:0)+'</p>'+
 (ids.length?'<div class="list">'+ids.map(pRow).join("")+'</div>':'<p class="empty">No problems recorded for this day.</p>');
 dlg.hidden=false}
var PCV=null,CHARTS=[];
function mountCharts(){
 if(V!=="profile"||!PCV)return;
 while(CHARTS.length){try{CHARTS.pop().destroy()}catch(e){}}
 var c1=$("ch1"),c2=$("ch2");if(!c1||!c2)return;
 var v1=PCV.v1,v2=PCV.v2;
 function cssv(n){var s=getComputedStyle(document.documentElement).getPropertyValue(n).trim();return s||"#888"}
 function mk(ctxv,vals,colName,unit){
  var labs=vals.map(function(v,i){var d2=new Date();d2.setDate(d2.getDate()-(vals.length-1-i));
   return i===vals.length-1?"today":String(d2.getDate())});

  return new Chart(ctxv,{
   type:"bar",
   data:{labels:labs,datasets:[{data:vals,backgroundColor:cssv("--"+colName),borderRadius:3,borderSkipped:false,maxBarThickness:12}]},
   options:{
    responsive:true,maintainAspectRatio:false,
    plugins:{
     legend:{display:false},
     tooltip:{callbacks:{
      label:function(c){return c.parsed.y+" "+unit},
      title:function(its){var d2=new Date();d2.setDate(d2.getDate()-(vals.length-1-its[0].dataIndex));return d2.toLocaleDateString(undefined,{month:"long",day:"numeric"})}
     }}
    },
    scales:{
     x:{grid:{display:false},border:{color:cssv("--ln")},ticks:{color:cssv("--mu"),font:{size:9},maxRotation:0,autoSkip:true,maxTicksLimit:6}},
     y:{beginAtZero:true,border:{display:false},grid:{color:cssv("--ln")},ticks:{color:cssv("--mu"),font:{size:9},maxTicksLimit:4,precision:0}}
    }
   }})
 }

 try{
  if(!window.Chart)throw 0;
  var x1=c1.getContext&&c1.getContext("2d");if(!x1)throw 0;
  CHARTS.push(mk(x1,v1,"ac","problems"));
  var x2=c2.getContext&&c2.getContext("2d");if(!x2)throw 0;
  CHARTS.push(mk(x2,v2,"ok","min"));
 }catch(e){
  c1.parentNode.innerHTML=barsSVG(v1,"ac");c2.parentNode.innerHTML=barsSVG(v2,"ok")}
}
function prof(){
 if(!PC){var d=new Date();PC={y:d.getFullYear(),m:d.getMonth()}}
 var tFo=0,tSt=0,tot=0;
 Object.keys(ST.d).forEach(function(k){var x=ST.d[k];tFo+=x.f||0;tSt+=x.s||0;tot+=cntDay(k)});
 var v1=[],v2=[],s1=0,s2=0;
 for(var i=29;i>=0;i--){var k=plus(-i),dd=ST.d[k];var a=cntDay(k),b=dd?Math.round((dd.f||0)*CMUL()/60):0;v1.push(a);v2.push(b);s1+=a;s2+=b}
 var avg1=Math.round(s1/30*10)/10,avg2=Math.round(s2/30*10)/10;
 PCV={v1:v1,v2:v2};
 var h='<div class="hero"><div><p class="eyebrow">Progress</p><h1>Profile</h1></div></div>';
 h+='<div class="stats"><div class="st"><span>Problems solved</span><b>'+tot+'</b><em class="stx">graded + LeetCode</em></div><div class="st"><span>Focus time</span><b>'+hm(Math.round(tFo*CMUL()))+'</b><em class="stx">credited · pomodoro × '+CMUL()+'</em></div><div class="st"><span>Focus actual</span><b>'+hm(tFo)+'</b><em class="stx">raw stopwatch</em></div><div class="st"><span>Problem time</span><b>'+hm(tSt)+'</b><em class="stx">sum of per-problem stints</em></div></div>';
 h+='<section class="card"><div class="ch-h"><span>Problems solved · 30 days</span><b>'+s1+'</b><em class="stx">avg '+avg1+'/day</em></div><div class="chbox"><canvas id="ch1"></canvas></div>'+
 '<div class="ch-h" style="margin-top:16px"><span>Focus time · 30 days (credited)</span><b>'+s2+'</b><em class="stx">avg '+avg2+'/day</em></div><div class="chbox"><canvas id="ch2"></canvas></div>'+
 '<p class="chip">Rendered with Chart.js · tap bars for exact dates. Focus credited = pomodoro focus × '+CMUL()+' (25m → '+Math.round(25*CMUL())+'m); breaks not counted. Each problem keeps its own stint time — shown on the problem and in the day dialog.</p></section>';
 var mk2=PC.y+"-"+("0"+(PC.m+1)).slice(-2),msum=0,mprob=0,mdays=0;
 Object.keys(ST.d).forEach(function(k){if(k.indexOf(mk2+"-")===0){var x=ST.d[k];msum+=(x.f||0)/60*CMUL();mprob+=cntDay(k);
  if(x.s>0||x.f>0||x.n>0||x.r>0||(x.qids||[]).length)mdays++}});
 var td=ymd(),cw=["M","T","W","T","F","S","S"];
 h+='<section class="card"><div class="cal-h"><button class="mini nav" data-pk="-1" aria-label="Previous month">'+ICO.left+'</button><b>'+new Date(PC.y,PC.m,1).toLocaleDateString(undefined,{month:"long",year:"numeric"})+'</b><button class="mini nav" data-pk="1" aria-label="Next month">'+ICO.right+'</button></div>'+
 '<p class="chip">'+hm(Math.round(msum*60))+' focused · '+mprob+' problems · '+mdays+' active days this month</p>';
 h+='<div class="cal">'+cw.map(function(w){return '<span class="cw">'+w+'</span>'}).join("");
 var first=new Date(PC.y,PC.m,1),nD=new Date(PC.y,PC.m+1,0).getDate();
 for(var b=0;b<(first.getDay()+6)%7;b++)h+='<span class="cd blank"></span>';
 for(var dn=1;dn<=nD;dn++){var key=PC.y+"-"+("0"+(PC.m+1)).slice(-2)+"-"+String(dn).padStart(2,"0"),pd0=ST.d[key],mn=pd0?Math.round((pd0.f||0)*CMUL()/60):0,pb=cntDay(key),cl=pd0?(mn>=90?" c4":mn>=60?" c3":mn>=30?" c2":mn>=1?" c1":""):"";
  h+='<button class="cd'+cl+(key===td?" today":"")+(key>td?" fut":"")+'" data-pk="'+key+'"'+(key>td?" disabled":"")+'><b>'+dn+'</b><span class="cm">'+(mn?mn+'m':'')+'</span><span class="cp">'+(pb?pb:'')+'</span></button>'}
 h+='</div><div class="caleg"><span><i class="sw s0"></i>none</span><span><i class="sw s1"></i>&lt;30m</span><span><i class="sw s2"></i>30–59m</span><span><i class="sw s3"></i>60–89m</span><span><i class="sw s4"></i>90m+</span></div>';
 h+='<p class="chip">Blue = pomodoro focus credited that day · green = problems solved · tap any day to open its dialog.</p></section>';
 h+='<details class="doc"><summary>How these numbers are built</summary><p class="chip">• Profile time comes from the pomodoro only: logged focus sessions, credited at × '+CMUL()+'.</p><p class="chip">• Each solution keeps its own timer: from opening a problem until you Submit, Pull, or grade it. Stored per problem (p.time, shown as “Xm here”) and per day.</p><p class="chip">• Problems per day: graded-here solves + LeetCode-synced solves dated to their submission day (deduped).</p><p class="chip">• All data stays on this device — nothing is sent anywhere except your own LeetCode sync calls.</p></details>';
 return h}
function field(id,label,type,val,ph){
 return '<label class="fld" for="'+id+'"><span>'+label+'</span><input id="'+id+'" type="'+type+'" value="'+esc(val)+'"'+(ph?' placeholder="'+ph+'"':'')+'></label>'}
function sett(){
 var ks=Object.keys(ST.p),c=ks.filter(function(k){return ST.p[k].code}).length,lc=Object.keys(ST.lc).length;
 return '<div class="hero"><div><p class="eyebrow">Preferences</p><h1>Settings</h1></div></div>'+
 '<p class="chip">'+ks.length+' problems tracked · '+c+' with saved solution · '+lc+' synced from LeetCode.</p>'+
 '<p class="chip">App shell: <b id="svr">checking…</b> — after an update, fully close and reopen once.</p>'+
 '<section class="card"><h3 class="lbl">Daily targets</h3>'+
 field("tn","New per day","number",ST.c.nt)+field("tr","Recall per day","number",ST.c.rt)+
 '<div class="btns"><button class="btn p" data-a="cfg">Save targets</button></div></section>'+
 '<section class="card"><h3 class="lbl">Pomodoro</h3>'+
 field("pf","Focus minutes","number",ST.c.pf)+field("pr","Rest minutes","number",ST.c.pr)+field("mult","Bonus multiplier (25m focus counts as…)","number",ST.c.mult)+
 '<p class="chip">Credit rule: a completed focus of '+(ST.c.pf||25)+'m is counted as '+Math.round((ST.c.pf||25)*CMUL())+'m. Rest minutes are not counted. The alarm rings when each phase completes — keep the tab open for sound.</p>'+
 '<div class="btns"><button class="btn" data-a="cfg">Save pomodoro</button></div></section>'+
 '<section class="card"><h3 class="lbl">LeetCode sync</h3><p class="chip">Optional. Cookies stay on this device and are sent only to your own /api endpoints — never anywhere else.</p>'+
 field("ls","LEETCODE_SESSION","password",LC.s||"","Cookie value")+field("lcc","csrftoken","password",LC.c||"","Cookie value")+
 '<label class="chk"><input type="checkbox" id="at"'+(ST.c.at!==0?' checked':'')+'><span>Mark problems you solved on LeetCode as “solved before” in the ladder (spread 10 per day). Off = only store code and times.</span></label>'+
 '<label class="chk"><input type="checkbox" id="bg"'+(ST.c.bg!==0?' checked':'')+'><span>Auto-sync in the background every '+esc(String(ST.c.si||120))+' minutes while the app is open.</span></label>'+
 field("si","Auto-sync interval (minutes)","number",ST.c.si)+
 '<div class="btns two"><button class="btn" data-a="cfg">Save cookies</button><button class="btn" data-a="test" id="btnTest">Test connection</button></div>'+
 '<div class="btns"><button class="btn p" data-a="sync" id="btnSync">Sync all problems</button><button class="btn" data-a="all" id="btnPull">Pull missing code (slow)</button></div>'+
 '<div class="sync-bar" id="syncComp" hidden><i id="sbBar"></i></div>'+
 '<p class="chip" id="syncMeta" style="margin-top:10px">'+(ST.syncAt?"Last sync "+fmtTs(ST.syncAt)+" · "+Object.keys(ST.lc).length+" seen · "+Object.keys(ST.p).filter(function(k){return ST.p[k].fromLc}).length+" marked from LeetCode":"Never synced yet — paste cookies, press Save cookies, then Sync all problems.")+'</p>'+
 '<p class="warn" id="w2"></p></section>'+
 '<section class="card"><h3 class="lbl">Backup</h3><p class="chip">Back up every night — browser storage can be wiped.</p>'+
 '<div class="btns two"><button class="btn p" data-a="exp">Export backup</button><label class="btn imp">Import<input type="file" id="im" hidden accept=".json"></label></div></section>'}
// ============================================
// ============================================
// STRIVERS A2Z SHEET — full features in strivers-a2z.json
// Timer, solution saving, revision, pomodoro, streak, day tracking — all separate from ladder
// Codolio APIs called ONLY on refresh — everything else reads/writes JSON file
// ============================================
var A2Z = {p:{}, d:{}, c:{nt:8,rt:10}, bk:"", pi:{0:0,1:0}, dr:{}, ses:[], lock:{}, pom:{ph:"idle",st:0,rem:0,pa:false}};
var A2Z_LOADED = false;
var A2Z_CUR = 0, A2Z_T0 = 0, A2Z_TM = null;
var A2Z_MODE = false;

function a2zMergeDefaults(data) {
  data = data || {};
  data.p = data.p || {};
  data.d = data.d || {};
  data.c = {...DEFAULTS.c, ...(data.c||{})};
  data.pi = {...DEFAULTS.pi, ...(data.pi||{})};
  data.dr = data.dr || {};
  data.ses = data.ses || [];
  data.lock = data.lock || {};
  data.pom = data.pom || {ph:"idle",st:0,rem:0,pa:false};
  data.bk = data.bk || "";
  data.problems = data.problems || [];
  data.stats = data.stats || {};
  return data;
}

async function codolioFetch(endpoint, method, body) {
  var url = '/api/codolio?endpoint=' + encodeURIComponent(endpoint);
  var opts = { method: method || 'GET', headers: {} };
  if (body) { opts.headers['Content-Type'] = 'application/json'; opts.body = JSON.stringify(body); }
  var r = await fetch(url, opts);
  if (!r.ok) throw new Error('Codolio API ' + r.status);
  return r.json();
}

async function loadA2zState() {
  if (A2Z_LOADED) return;
  try {
    var data = await codolioFetch('read', 'GET');
    A2Z = a2zMergeDefaults(data);
    A2Z_LOADED = true;
    // If no problems yet, auto-fetch from Codolio once
    if (!A2Z.problems || A2Z.problems.length === 0) {
      toast('Fetching A2Z sheet from Codolio (one-time)…');
      A2Z = await codolioFetch('refresh', 'GET');
      A2Z = a2zMergeDefaults(A2Z);
      await saveA2zState();
      toast('A2Z sheet loaded — ' + (A2Z.problems || []).length + ' problems');
    }
  } catch (e) {
    console.warn('A2Z load failed:', e);
    toast('A2Z load failed — check connection');
  }
}

async function saveA2zState() {
  try {
    await codolioFetch('write', 'POST', A2Z);
  } catch (e) {
    console.warn('A2Z save failed:', e);
  }
}

function a2zDay(k){return A2Z.d[k]||(A2Z.d[k]={n:0,r:0,s:0,ids:[],f:0,qids:[]})}
function a2zStreak(){var n=0;for(var i=0;i<400;i++){var x=A2Z.d[plus(-i)];if(x&&(x.n>=A2Z.c.nt||x.f>=1500))n++;else if(i>0)break}return n}

function a2zFinish(id,g,code,note,sec,timeIn){
  var t=ymd(),dd=a2zDay(t),first=!A2Z.p[id],p=A2Z.p[id]||(A2Z.p[id]={id:id,h:[],b:0,first:t});
  timeIn=timeIn||sec;
  p.code=code;if(note)p.note=note;p.time=(p.time||0)+timeIn;
  p.h.push({at:Date.now(),g:g,s:sec||0,code:code,k:first?"n":"r",src:"a2z"});
  if(first){p.b=g==="easy"?1:0;p.due=plus(INT[p.b]);dd.n++}else{p.b=g==="easy"?Math.min(5,p.b+2):g==="ok"?Math.min(5,p.b+1):g==="hard"?p.b:0;p.due=plus(g==="failed"?1:g==="hard"?2:INT[p.b]);dd.r++}
  dd.s+=timeIn;dd.ids.push({id:id,k:first?"n":"r"});saveA2zState();
}

function a2zPomLen(ph){return ((ph==="rest")?(+A2Z.c.pr||5):(+A2Z.c.pf||25))*60}
function a2zPomLeft(){var d=A2Z.pom||{},ph=d.ph||"idle",len=a2zPomLen(ph==="rest"?"rest":"focus");
  if(ph==="idle")return a2zPomLen("focus");
  return Math.max(0,len-(d.pa?len-(d.rem||0):Math.floor((Date.now()-d.st)/1000)))}
function a2zPomRender(){var d=A2Z.pom||{},ph=d.ph||"idle",b=$("pomBox");if(!b)return;
  $("pPh").textContent=ph==="focus"?"Focus":ph==="rest"?"Rest":"Idle";
  $("pTm").textContent=mmss(a2zPomLeft());
  $("pBtn").innerHTML=d.pa?ICO.pause:(ph==="idle"?ICO.play:ICO.pause);
  b.className="ppill"+(ph==="focus"?" f":ph==="rest"?" r":"")}
function a2zPomBtn(){var d=A2Z.pom||{},len;
  if(d.ph==="idle"){A2Z.pom={ph:"focus",st:Date.now(),rem:0,pa:false};saveA2zState()}
  else if(d.pa){len=a2zPomLen(d.ph);A2Z.pom.st=Date.now()-(len-(d.rem||0))*1000;A2Z.pom.pa=false;saveA2zState()}
  else{len=a2zPomLen(d.ph);A2Z.pom.rem=Math.max(0,len-Math.floor((Date.now()-d.st)/1000));A2Z.pom.pa=true;saveA2zState()}
  a2zPomTick()}
function a2zPomRs(){var d=A2Z.pom||{};
  if(d.ph==="focus"&&!d.pa&&d.st){var el=Math.floor((Date.now()-d.st)/1000);
    if(el>60){logSes("focus",el);toast("Partial pomodoro logged — "+mm(el))}}
  A2Z.pom={ph:"idle",st:0,rem:0,pa:false};saveA2zState();a2zPomRender()}
function a2zPomTick(){var d=A2Z.pom||{};if(d.ph==="idle"){a2zPomRender();return}
  var len=a2zPomLen(d.ph),el=d.pa?(len-(d.rem||0)):Math.floor((Date.now()-d.st)/1000);
  if(el>=len){logSes(d.ph,len);
    if(d.ph==="focus"){alarm();toast("Pomodoro done ✓ "+mm(Math.round(len*CMUL()))+" credited — rest starting");
      A2Z.pom={ph:"rest",st:Date.now(),rem:0,pa:false}}
    else{alarm();toast("Break over — back to A2Z");A2Z.pom={ph:"idle",st:0,rem:0,pa:false}}
    saveA2zState();a2zPomRender();return}
  a2zPomRender()}
function a2zLogSes(ph,du){A2Z.ses.push({at:Date.now(),ph:ph,du:du});if(ph==="focus"){a2zDay(ymd()).f+=du}saveA2zState()}

function a2zDiffBadge(d){
  var c={easy:'e',medium:'m',hard:'h',basic:'b'}[(d||'').toLowerCase()]||'m';
  var t=(d||'Medium').toUpperCase();
  return '<span class="dchip '+c+'">'+esc(t)+'</span>';
}
function a2zProbStatus(id){
  if(!A2Z.p||!A2Z.p[id])return '<span class="rbadge mild">Not started</span>';
  var p=A2Z.p[id],t=ymd();
  if(!p.due)return '<span class="rbadge mild">Not started</span>';
  var last=p.h&&p.h[p.h.length-1],done=last&&last.at&&ymd(new Date(last.at))===t;
  if(done&&p.due>=t)return '<span class="rbadge ok">revised</span>';
  else if(p.due<t)return '<span class="rbadge bad">'+gap(p.due,t)+'d overdue</span>';
  else{var u=gap(t,p.due);return '<span class="rbadge '+(u<=3?'soon':'')+'">'+p.due.slice(5)+'</span>'}
}

function a2zRowHTML(p){
  var prog=A2Z.p[p.id]||{};
  var statusCls=prog.code?'saved':'';
  var leetcodeUrl=p.problemUrl||('https://leetcode.com/problems/'+(p.slug||p.id)+'/');
  var dueBadge='';
  if(prog.due){var t=ymd();var last=prog.h&&prog.h[prog.h.length-1];var done=last&&last.at&&ymd(new Date(last.at))===t;
    if(done&&prog.due>=t)dueBadge='<span class="rbadge ok">revised</span>';
    else if(prog.due<t)dueBadge='<span class="rbadge bad">'+gap(prog.due,t)+'d overdue</span>';
    else{var u=gap(t,prog.due);dueBadge='<span class="rbadge '+(u<=3?'soon':'')+'">'+prog.due.slice(5)+'</span>'}}
  return '<div class="row" data-id="'+esc(p.id)+'" role="button" tabindex="0" aria-label="Open '+esc(p.title)+'">'
    +'<span class="tick" data-s="'+(prog.code?statusCls:'none')+'">'+tick()+'</span>'
    +dueBadge
    +'<span class="row-main"><span class="row-t">'+esc(p.title)+' '+a2zDiffBadge(p.difficulty)+'</span>'
    +'<span class="row-m">'+(p.topic?p.topic+' › ':'')+(p.subTopic?p.subTopic:'')+'</span></span>'
    +'<div class="a2z-actions">'
    +'<a href="'+esc(leetcodeUrl)+'" target="_blank" class="mini" style="margin-right:4px">Problem</a>'
    +'<button class="mini sb" onclick="event.stopPropagation();a2zOpen('+p.id+');" style="font-size:11px;padding:6px 8px">Open</button>'
    +'</div>'
    +'</div>';
}

function a2zView(){
  if(!A2Z_LOADED)return '<p class="empty">Loading A2Z sheet…</p>';
  var problems=A2Z.problems||[];
  var stats=A2Z.stats||{};
  var h='<div class="hero"><div><p class="eyebrow">Strivers A2Z DSA Sheet</p><h1>A2Z Sheet</h1></div></div>';

  // Stats
  var total=stats.total||problems.length;
  var streak=a2zStreak();
  var solvedCount=Object.keys(A2Z.p||{}).filter(function(k){var p=A2Z.p[k];var h=p.h&&p.h[p.h.length-1];return h&&(h.g==="easy"||h.g==="ok"||h.g==="hard");}).length;
  h+='<div class="stats">'
    +'<div class="st"><span>Total Questions</span><b>'+total+'</b></div>'
    +'<div class="st"><span>Solved</span><b>'+solvedCount+'</b></div>'
    +'<div class="st"><span>Streak</span><b>'+streak+'</b></div>'
    +'<div class="st"><span>Progress</span><b>'+(total?Math.round(100*solvedCount/total):0)+'%</b></div>'
    +'</div>';

  // Pomodoro pill (same as main app)
  h+='<div class="ppill" id="a2zPomBox"><span class="pk" id="a2zPPh">Focus</span><b id="a2zPTm">25:00</b><button class="pi" id="a2zPBtn" aria-label="Start or pause pomodoro"></button><button class="pi" id="a2zPRs" aria-label="Reset pomodoro"></button></div>';

  // Topic filters
  var topics=stats.topics?Object.keys(stats.topics):[];
  h+='<div class="seg" role="group" aria-label="Filter by topic">';
  h+='<button data-a2z-topic="" aria-pressed="true">All Topics ('+problems.length+')</button>';
  topics.forEach(function(t){
    var cnt=problems.filter(function(p){return p.topic===t;}).length;
    h+='<button data-a2z-topic="'+esc(t)+'" aria-pressed="false">'+esc(t)+' ('+cnt+')</button>';
  });
  h+='</div>';

  // Export/Import
  h+='<div class="btns" style="margin:12px 0">';
  h+='<button class="btn" onclick="exportA2z()">Export A2Z Backup</button>';
  h+='<label class="btn imp">Import<input type="file" id="a2zIm" hidden accept=".json"></label>';
  h+='</div>';

  // Problems list
  var filtered=problems.filter(function(p){
    if(A2Z_TOPIC_FILTER&&p.topic!==A2Z_TOPIC_FILTER)return false;
    if(A2Z_SUBTOPIC_FILTER&&p.subTopic!==A2Z_SUBTOPIC_FILTER)return false;
    return true;
  });

  if(!filtered.length){
    h+='<p class="empty">No problems found for this filter.</p>';
  } else {
    h+='<div class="list">';
    filtered.forEach(function(p){h+=a2zRowHTML(p);});
    h+='</div>';
  }
  h+='<p class="hint">All data stored in strivers-a2z.json (separate from your ladder). Timer, solutions, revisions — full feature parity.</p>';
  return h;
}

function a2zOpen(id){
  var p=A2Z.p[id];
  // Find problem from the problems list
  var prob=A2Z.problems.find(function(x){return x.id===id;});
  if(!prob){
    toast('Problem not found');
    return;
  }
  A2Z_MODE=true;
  A2Z_CUR=id;A2Z_T0=Date.now();
  var ov=$("ov"),dr=A2Z.dr[id]||{};
  $("shEy").textContent="#"+id+" · "+(p?"Recall":"New")+" · "+(prob.difficulty||"Medium");
  $("shTitle").textContent=prob.title||prob.name;
  $("shLink").href=prob.problemUrl||('https://leetcode.com/problems/'+(prob.slug||prob.id)+'/');
  $("idea").textContent="(A2Z problem — no hint available)";
  $("ideaD").open=false;
  $("ptime").textContent="Time on this problem: "+(p&&p.time?hm(p.time):"not tracked yet");
  var geo=(p&&p.h||[]).filter(function(x){return x.g==="easy"||x.g==="ok"||x.g==="hard"||x.g==="failed"});
  $("recC").textContent=geo.length?("Recall iterations: "+geo.length+" · last "+({easy:"easy ✓",ok:"OK ✓",hard:"hard ✓",failed:"failed"}[geo[geo.length-1].g])+" on "+new Date(geo[geo.length-1].at).toLocaleDateString()):"Recall iterations: 0 — grade below to start tracking";
  $("lcSub").innerHTML='<p class="chip">A2Z revision tracking — grade below to schedule next review.</p>';
  $("lockChip").hidden=true;
  $("lk").hidden=true;
  $("sb").disabled=false;$("sb").textContent="Submit";
  $("cd").value=dr.code!=null?dr.code:((p&&p.code)||"");
  $("nt").value=dr.note!=null?dr.note:(p&&p.note||"");
  $("pv").textContent=p&&p.code?p.code:"(none saved yet)";
  $("cd").disabled=false;
  $("w").textContent="";$("w").className="warn";$("pl").disabled=false;$("pl").textContent="Pull from LeetCode";
  var pill=$("svPill");pill.textContent=dr.at?"Draft saved":"Auto-save on";pill.classList.toggle("on",!!dr.at);
  var dv=$("dv");if(dv)dv.textContent=dr.at?"Draft stored on this device since "+fmtTs(dr.at):"Auto-saves to this device as you type";
  ov.hidden=false;document.body.style.overflow="hidden";
  requestAnimationFrame(function(){ov.classList.add("open");});
  clearInterval(A2Z_TM);$("tm").textContent="00:00";
  var tm=function(){var s=Math.round((Date.now()-A2Z_T0)/1000);$("tm").textContent=("0"+(s/60|0)).slice(-2)+":"+("0"+s%60).slice(-2);};
  tm();A2Z_TM=setInterval(tm,1000);
  setTimeout(function(){$("sheet").focus();},50);
}

function a2zDraftSave(){clearTimeout(A2Z_DT);A2Z_DT=setTimeout(function(){
  if(A2Z_CUR&&$("cd")&&$("nt")){var c=$("cd").value,n=$("nt").value.trim();
    if(!c.replace(/\s/g,"")&&!n){if(A2Z.dr[A2Z_CUR]){delete A2Z.dr[A2Z_CUR];saveA2zState()}return}
    A2Z.dr[A2Z_CUR]={code:c,note:n,at:Date.now()};saveA2zState();
    var pill=$("svPill");if(pill){pill.textContent="Draft saved ✓";pill.classList.add("on")}}
  },400)}
var A2Z_DT=null;
function a2zDrFlush(){clearTimeout(A2Z_DT);if($("ov").hidden||!A2Z_CUR)return;
  var c=$("cd").value,n=$("nt").value.trim();
  if(!c.replace(/\s/g,"")&&!n){if(A2Z.dr[A2Z_CUR]){delete A2Z.dr[A2Z_CUR];saveA2zState()}return}
  A2Z.dr[A2Z_CUR]={code:c,note:n,at:Date.now()};saveA2zState();
  var pill=$("svPill");if(pill){pill.textContent="Draft saved ✓";pill.classList.add("on")}}
function a2zShut(flush){if(flush!==false)a2zDrFlush();clearInterval(A2Z_TM);A2Z_TM=null;A2Z_MODE=false;
  var ov=$("ov");ov.classList.remove("open");document.body.style.overflow="";
  setTimeout(function(){if(!ov.classList.contains("open"))ov.hidden=true},320);render()}

async function exportA2z(){
  try{
    var data=await codolioFetch('read','GET');
    var blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
    var a=document.createElement('a');a.href=URL.createObjectURL(blob);
    a.download='strivers-a2z-'+(new Date().toISOString().slice(0,10))+'.json';a.click();
    toast('A2Z backup exported ✓');
  }catch(e){toast('Export failed');}
}

async function importA2z(file){
  var r=new FileReader();r.onload=async function(){
    try{
      var s=JSON.parse(r.result);
      if(!s.problems)throw 0;
      await codolioFetch('write','POST',s);
      A2Z=a2zMergeDefaults(s);A2Z_LOADED=true;
      toast('A2Z backup imported ✓');render();
    }catch(e){alert('Not a valid A2Z backup file');}
  };r.readAsText(file);
}
function render(){
 while(CHARTS.length){try{CHARTS.pop().destroy()}catch(e){}}
 Array.prototype.forEach.call(document.querySelectorAll("#bnav button"),function(b){b.setAttribute("aria-selected",b.dataset.v===V)});
 var sk=streak(),s=$("strk");s.innerHTML=ICO.flame+"<b>"+sk+"</b>";s.className="streak-chip"+(sk>0?" on":"");
 $("v").innerHTML=V==="today"?today():V==="ladder"?ladder():V==="profile"?prof():V==="set"?sett():V==="a2z"?a2z():"";
 if($("im"))$("im").onchange=function(){imp(this.files[0])};
if($("a2zIm"))$("a2zIm").onchange=function(){importA2z(this.files[0])};
 if(V==="set"&&$("svr")&&!$("svr").dataset.done){$("svr").dataset.done="1";
  fetch("/sw.js").then(function(r){return r.text()}).then(function(s){var m=String(s).match(/dsa-v\d+/),e=$("svr");
   if(e&&e.dataset.done==="1")e.textContent=m?m[0]:"unknown"}).catch(function(){})}
 if(V==="profile")setTimeout(mountCharts,30);
 pomRender()}
function exp(){ST.bk=ymd();save();var a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(ST)],{type:"application/json"}));a.download="dsa-grind-"+ymd()+".json";a.click()}
function imp(f){var r=new FileReader();r.onload=function(){try{var s=JSON.parse(r.result);if(!s.p)throw 0;ST=s;if(!ST.pi)ST.pi={0:0,1:0};if(!ST.lc)ST.lc={};if(!ST.dr)ST.dr={};if(!ST.ses)ST.ses=[];if(!ST.lock)ST.lock={};if(!ST.lsub)ST.lsub={};if(!ST.pom)ST.pom={ph:"idle",st:0,rem:0,pa:false};save();render()}catch(e){alert("Not a valid backup file")}};r.readAsText(f)}
function backfill(id){if(ST.p[id])return;var k=Object.keys(ST.p).filter(function(x){return ST.p[x].old}).length;ST.p[id]={id:id,h:[],b:0,old:1,first:"before",due:plus(Math.floor(k/10))};save()}
function fmtTs(ms){if(!ms)return"";var d=new Date(ms),same=d.toDateString()===new Date().toDateString();
 return (same?"":d.toLocaleDateString(undefined,{month:"short",day:"numeric"})+" ")+d.toLocaleTimeString(undefined,{hour:"2-digit",minute:"2-digit"})}
function subHTML(id){var s=ST.lc[id],p=ST.p[id];
 if(!s)return '<p class="chip">Not synced yet — use “Sync all problems” in Settings, or Pull here.</p>';
 var h='<div class="lc-row"><b>'+esc(s.runtime||"—")+'</b><span>'+esc(String(s.lang||"").toUpperCase())+' · '+fmtTs(s.ts)+'</span></div>';
 if(s.code&&p&&p.code&&s.code!==p.code)h+='<p class="lc-diff">LeetCode has a newer version than your saved one.</p>';
 return h}
function applySub(id,s,stint){if(!BY[id])return 0;
 var old=ST.lc[id]||{};
 ST.lc[id]={id:id,lang:s.lang||old.lang||"",runtime:s.runtime||old.runtime||"",ts:s.ts||old.ts||0,at:Date.now(),code:s.code||old.code||""};
 var p=ST.p[id];
 if(s.code&&p&&(!p.code||p.fromLc)){p.code=s.code;p.fromLc=1;
  var last=p.h[p.h.length-1];
  if(!(last&&last.g==="synced"&&last.ts===(s.ts||0)))p.h.push({at:Date.now(),g:"synced",s:stint||0,code:s.code,k:"s",ts:s.ts||0,src:"lc"})}
 return s.code?1:0}
function applyLsub(id,r){var a=r&&r.subs||[];if(a.length)ST.lsub[id]=a;save();return a.length}
var DR_T=null;
function drFlush(){clearTimeout(DR_T);if($("ov").hidden||!CUR)return;
 var c=$("cd").value,n=$("nt").value.trim();
 if(!c.replace(/\s/g,"")&&!n){if(ST.dr[CUR]){delete ST.dr[CUR];save()}return}
 ST.dr[CUR]={code:c,note:n,at:Date.now()};save();
 var pill=$("svPill");if(pill){pill.textContent="Draft saved ✓";pill.classList.add("on")}}
function drSave(){clearTimeout(DR_T);DR_T=setTimeout(drFlush,400)}
var SYNC_MS=650;
function codeOf(id){return (ST.p[id]&&ST.p[id].code)||(ST.lc[id]&&ST.lc[id].code)||""}
function solveFromLc(id,ts){if(ST.p[id])return 0;
 var k=Object.keys(ST.p).filter(function(x){return ST.p[x].old}).length;
 var lc=ST.lc[id]||{};
 var rec={id:id,h:[],b:0,old:1,fromLc:1,first:"before",due:plus(Math.floor(k/10)),code:lc.code||""};
 rec.h.push({at:Date.now(),g:"synced",s:0,code:rec.code,k:"s",ts:Number(ts)||lc.ts||0});
 ST.p[id]=rec;return 1}
async function syncAll(btn){
 var w=$("w2"),bar=$("syncComp"),fill=$("sbBar");
 if(!LC.s||!LC.c){if(w){w.className="warn";w.textContent="Add your LeetCode cookies first, then press Save cookies."}return}
 if(SYNCING)return;SYNCING=true;
 var auto=ST.c.at!==0;
 if(btn)btn.disabled=true;
 if(bar)bar.hidden=false;
 var notes=[],matched=0,tracked=0,got=0,rejected=0,probed=0;
 function prog(t,pct){if(fill)fill.style.width=Math.max(3,Math.min(100,Math.round(pct)))+"%";if(btn)btn.textContent=t}
 prog("Reading your LeetCode history…",8);
 var subs=null,dbg=null;
 try{
  var r=await fetch("/api/sync",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({session:LC.s,csrf:LC.c})}).then(function(x){return x.json()});
  if(r&&r.subs&&r.subs.length){subs=r.subs;dbg=r.dbg||null}
  else notes.push((r&&r.error)||"the history endpoint returned no submissions")
 }catch(e){notes.push(e.message)}
 if(subs){
  prog("Found "+subs.length+" solved problems — applying…",32);
  subs.forEach(function(s){var id=SL[s.slug];if(!id||!S[id])return;
   var known=!!(ST.lc[id]||ST.p[id]);
   matched++;
   if(applySub(id,s))got++;
   if(auto)tracked+=solveFromLc(id,s.ts);
   countNewDay(id,s.ts,known)});
  save()
 }
 var need=subs
  ?ALLP.filter(function(q){return S[q.id]&&!codeOf(q.id)&&(ST.lc[q.id]||ST.p[q.id])}).map(function(q){return q.id})
  :ALLP.filter(function(q){return S[q.id]&&!codeOf(q.id)}).map(function(q){return q.id});
 for(var i=0;i<need.length;i++){
  var id=need[i];
  prog("Fetching code "+(i+1)+"/"+need.length+"…",34+60*((i+1)/need.length));
  try{
   var rr=await pull(id);
   if(rr&&rr.code){var known2=!!(ST.lc[id]||ST.p[id]);applySub(id,rr);got++;probed++;save();if(auto)tracked+=solveFromLc(id,rr.ts);countNewDay(id,rr.ts,known2)}
   else{probed++;if(rr&&rr.error&&/cookie|session|expired|rejected|blocked|403|401/i.test(rr.error))rejected++}
  }catch(e){rejected++}
  if(i<need.length-1)await new Promise(function(f){setTimeout(f,SYNC_MS)})
 }
 ST.syncAt=Date.now();save();
 if(btn){btn.disabled=false;btn.textContent="Sync all problems"}
 if(bar)bar.hidden=true;
 SYNCING=false;
 render();
 var m;
 if(rejected&&!got&&!tracked){
  m="LeetCode rejected every request — your cookies have expired. Re-copy LEETCODE_SESSION and csrftoken, then Save cookies."
 }else{
  var parts=[];
  if(matched)parts.push("matched "+matched+" solved problems");
  if(got)parts.push("stored "+got+" solutions");
  if(tracked)parts.push("marked "+tracked+" as “solved before”");
  if(parts.length)m="In sync: "+parts.join(" · ");
  else if(subs)m="Scanned "+(dbg?dbg.seen:0)+" recent submissions ("+(dbg?dbg.accepted:0)+" accepted) — none belong to this ladder's "+ALLP.length+" problems";
  else m="Nothing to sync — LeetCode had no accepted submissions to apply";
  if(!subs)m+=got?" · the history list was unavailable, so each problem was probed individually":" · the history list was unavailable ("+notes[0]+")";
  if(rejected)m+=" · LeetCode rejected "+rejected+" code requests — refresh your cookies";
 }
 var w2=$("w2");if(w2){w2.className="warn "+(rejected&&!got?"":"ok-msg");w2.textContent=m}
 if(!btn)toast("Auto-sync done — "+(got?got+" solutions stored":"up to date"))}
function countNewDay(id,ts,known){if(known||!ts)return;var dd=day(ymd(new Date(ts)));
 dd.qids=dd.qids||[];
 if(dd.qids.indexOf(id)<0){dd.qids.push(id);save()}}
function autoSync(){if(SYNCING||ST.c.bg===0)return;
 if(!LC.s||!LC.c||navigator.onLine===false)return;
 if(Date.now()-(ST.syncAt||0)<(+ST.c.si||120)*60000)return;
 syncAll(null)}
function pull(id){if(!LC.s||!LC.c)return Promise.reject(new Error("Add your LeetCode cookies in Settings first"));return fetch("/api/lc",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({session:LC.s,csrf:LC.c,slug:S[id]})}).then(function(r){return r.json()})}
async function pullAll(el){var ids=Object.keys(ST.p).filter(function(k){return !ST.p[k].code&&S[k]}),ok=0;el.disabled=true;for(var i=0;i<ids.length;i++){el.textContent="Pulling "+(i+1)+"/"+ids.length;try{var r=await pull(ids[i]);if(r.code){applySub(ids[i],r);ok++;save()}}catch(e){}await new Promise(function(f){setTimeout(f,1200)})}el.disabled=false;el.textContent="Pulled "+ok+" of "+ids.length;var w=$("w2");if(w){w.className="warn ok-msg";w.textContent="Pulled "+ok+" of "+ids.length+" missing solutions."}}
function readCfg(){if(!$("tn"))return;ST.c.nt=+$("tn").value||8;ST.c.rt=+$("tr").value||10;
 if($("pf"))ST.c.pf=Math.max(1,+$("pf").value||25);
 if($("pr"))ST.c.pr=Math.max(1,+$("pr").value||5);
 if($("mult"))ST.c.mult=Math.max(1,+$("mult").value||1.2);
 if($("si"))ST.c.si=Math.max(15,+$("si").value||120);
 if($("bg"))ST.c.bg=$("bg").checked?1:0;
 if($("at"))ST.c.at=$("at").checked?1:0;
 LC={s:$("ls").value.trim(),c:$("lcc").value.trim()};save()}
function testLC(b){var w=$("w2");w.className="warn";b.classList.remove("good");if(!LC.s||!LC.c){w.textContent="Add both cookies first, then press Save cookies.";return}
 b.disabled=true;var old=b.textContent;b.textContent="Testing…";
 pull("1").then(function(r){b.disabled=false;b.textContent=old;if(r.error){w.textContent=r.error}else{b.classList.add("good");b.textContent="Connected ✓";w.className="warn ok-msg";w.textContent="Cookies work — pulled your Two Sum submission ("+r.lang+", "+r.runtime+")."}})
 .catch(function(e){b.disabled=false;b.textContent=old;w.textContent=e.message})}
function act(a,b){if(a==="exp"||a==="bk"){exp();render()}
 else if(a==="cfg"){readCfg();b.textContent="Saved ✓";var w=$("w2");if(w){w.className="warn ok-msg";w.textContent="Saved on this device."}}
 else if(a==="test"){readCfg();testLC(b)}
 else if(a==="sync"){readCfg();syncAll(b)}
 else if(a==="all")pullAll(b)}
function finish(id,g,code,note,sec,timeIn){var t=ymd(),dd=day(t),first=!ST.p[id],p=ST.p[id]||(ST.p[id]={id:id,h:[],b:0,first:t});timeIn=timeIn||sec;
 p.code=code;if(note)p.note=note;p.time=(p.time||0)+timeIn;p.h.push({at:Date.now(),g:g,s:sec||0,code:code,k:first?"n":"r",src:"local"});
 if(first){p.b=g==="easy"?1:0;p.due=plus(INT[p.b]);dd.n++}else{p.b=g==="easy"?Math.min(5,p.b+2):g==="ok"?Math.min(5,p.b+1):g==="hard"?p.b:0;p.due=plus(g==="failed"?1:g==="hard"?2:INT[p.b]);dd.r++}
 dd.s+=timeIn;dd.ids.push({id:id,k:first?"n":"r"});save()}
function openP(id){
 var q=BY[id],p=ST.p[id],ov=$("ov"),dr=ST.dr[id]||{};
 CUR=id;T0=Date.now();
 $("shEy").textContent="#"+id+" · "+(p?"Recall":"New")+" · "+DIFF[q.d];
 $("shTitle").textContent=q.t;
 $("shLink").href="https://leetcode.com/problems/"+(S[id]||"")+"/";
 $("idea").textContent=q.x;$("ideaD").open=false;
 $("ptime").textContent="Time on this problem: "+(p&&p.time?hm(p.time):"not tracked yet");
 var geo=(p&&p.h||[]).filter(function(x){return x.g==="easy"||x.g==="ok"||x.g==="hard"||x.g==="failed"});
 $("recC").textContent=geo.length?("Recall iterations: "+geo.length+" · last "+({easy:"easy ✓",ok:"OK ✓",hard:"hard ✓",failed:"failed"}[geo[geo.length-1].g])+" on "+new Date(geo[geo.length-1].at).toLocaleDateString()):"Recall iterations: 0 — grade below to start tracking";
 $("lcSub").innerHTML=subHTML(id);
 var lock=isLock(id);
 $("lockChip").hidden=!lock;
 $("lk").textContent=lock?"Mark as available":"Mark as subscription needed";
 $("sb").disabled=lock;$("sb").textContent=lock?"Locked":"Submit";
 $("cd").value=dr.code!=null?dr.code:((p&&p.code)||(ST.lc[id]&&ST.lc[id].code)||"");
 $("nt").value=dr.note!=null?dr.note:(p&&p.note||"");
 $("pv").textContent=p&&p.code?p.code:"(none graded yet)";
 $("cd").disabled=lock;
 $("w").textContent="";$("w").className="warn";$("pl").disabled=false;$("pl").textContent="Pull from LeetCode";
 subRender(id);xtShow("det");
 var pill=$("svPill");pill.textContent=dr.at?"Draft saved":"Auto-save on";pill.classList.toggle("on",!!dr.at);
 var dv=$("dv");if(dv)dv.textContent=dr.at?"Draft stored on this device since "+fmtTs(dr.at):"Auto-saves to this device as you type";
 ov.hidden=false;document.body.style.overflow="hidden";
 requestAnimationFrame(function(){ov.classList.add("open")});
 clearInterval(TM);$("tm").textContent="00:00";
 var tm=function(){var s=Math.round((Date.now()-T0)/1000);$("tm").textContent=("0"+(s/60|0)).slice(-2)+":"+("0"+s%60).slice(-2)};
 tm();TM=setInterval(tm,1000);
 setTimeout(function(){$("sheet").focus()},50)}
function xtShow(x){Array.prototype.forEach.call(document.querySelectorAll("#xtab button"),function(b){b.setAttribute("aria-selected",b.dataset.xt===x)});
 $("xdet").hidden=x!=="det";$("xsub").hidden=x!=="sub"}
function subRender(id){
 var p=ST.p[id]||{},ev=[],CLS={easy:["Easy ✓","b-ok"],ok:["OK ✓","b-lc"],hard:["Hard ✓","b-warn"],failed:["Failed","b-fail"],synced:["Synced · LC","b-lc"],local:["Submitted here","b-mu"]};
 (p.h||[]).forEach(function(h){ev.push({at:h.at||0,g:h.g,s:h.s||0,src:h.src||"local",code:h.code||"",runtime:"",lang:""})});
 (ST.lsub[id]||[]).forEach(function(s){ev.push({at:Number(s.timestamp||0)*1000,g:s.statusDisplay||"",s:0,src:"lch",runtime:s.runtime||"",lang:s.langName||s.lang||"",code:""})});
 ev.sort(function(a,b){return b.at-a.at});
 var n=$("subC");if(n)n.textContent=String(ev.length);
 var el=$("subL");if(!el)return;
 el.innerHTML=ev.length?ev.map(function(e){
  var cls,lbl;
  if(e.src==="lch"){cls=e.g==="Accepted"?"b-ok":"b-fail";lbl=(e.g==="Accepted"?"Accepted":"Try "+(e.g||"—"))+" · LC"}
  else{var m=CLS[e.g]||["Done","b-mu"];lbl=m[0];cls=m[1]}
  var mt=[];if(e.s)mt.push(mm(e.s));if(e.runtime)mt.push(e.runtime);if(e.lang)mt.push(e.lang);
  return '<details class="sub'+(e.g==="Accepted"?" acc":"")+'"><summary><span class="srcb '+cls+'">'+esc(lbl)+'</span><span class="sdate">'+fmtTs(e.at)+'</span><span class="smeta">'+esc(mt.join(" · "))+'</span><i class="chev">'+ICO.chev+'</i></summary>'+(e.code?'<pre>'+esc(e.code)+'</pre>':'<p class="chip">Code not stored for this entry.</p>')+'</details>'}).join("")
  :'<p class="empty">No submissions yet — Submit here, or load your LeetCode history.</p>'}
function shut(flush){if(flush!==false)drFlush();clearInterval(TM);TM=null;var ov=$("ov");ov.classList.remove("open");document.body.style.overflow="";
 setTimeout(function(){if(!ov.classList.contains("open"))ov.hidden=true},320);render()}
$("bnav").onclick=async function(e){var b=e.target.closest("button");if(b){V=b.dataset.v;if(V==="a2z")await loadA2zState();render();window.scrollTo(0,0)}};
$("v").addEventListener("click",async function(e){var b=e.target.closest("[data-bf],[data-tp],[data-pi],[data-a],[data-id],[data-acc],[data-pom],[data-pk],[data-grade],[data-a2z-topic]");if(!b)return;var d=b.dataset;
 if(d.bf){backfill(+d.bf);render()}
 else if(d.tp){TP=+d.tp;render()}
 else if(d.pi){ST.pi[TP]=+d.pi;save();render()}
 else if(d.a)act(d.a,b)
 else if(d.id){if(A2Z_MODE){a2zOpen(+d.id);}else{openP(+d.id);}}
 else if(d.pom){if(d.pom==="toggle"){if(A2Z_MODE){a2zPomBtn();}else{pomBtn();}}else{if(A2Z_MODE){a2zPomRs();}else{pomRs();render()}}}
 else if(d.acc){var sec=e.target.closest(".acc"),bb=sec.querySelector(".acc-b"),ic=sec.querySelector(".acc-ic");ACC[d.acc]=!ACC[d.acc];
  if(bb)bb.hidden=!ACC[d.acc];sec.classList.toggle("open",ACC[d.acc]);ic&&ic.classList.toggle("flip",ACC[d.acc]);
  var ah=sec.querySelector(".acc-h");ah&&ah.setAttribute("aria-expanded",!!ACC[d.acc])}
 else if(d.pk){var pk=d.pk;
  if(/^\d{4}-/.test(pk))dayOpen(pk);
  else if(pk==="x"){var dlg=$("pdDlg");if(dlg)dlg.hidden=true}
  else{PC={y:PC.y,m:PC.m+(+pk)};if(PC.m<0){PC.m=11;PC.y--}if(PC.m>11){PC.m=0;PC.y++}render()}}
 else if(d.grade){var row=b.closest(".row"),id=row?row.dataset.id:null;if(id){
   if(A2Z_MODE){var p=A2Z.p[id]||{},sec=Math.round((Date.now()-A2Z_T0)/1000);a2zFinish(id,d.grade,$("cd").value,$("nt").value.trim(),sec);a2zShut(false);}
   else{finish(id,d.grade,$("cd").value,$("nt").value.trim(),Math.round((Date.now()-T0)/1000));}}
 }
 else if(d.a2zTopic!==undefined){A2Z_TOPIC_FILTER=d.a2zTopic||null;A2Z_SUBTOPIC_FILTER=null;render();}});
$("v").addEventListener("keydown",function(e){if(e.key!=="Enter"&&e.key!==" ")return;var r=e.target.closest(".row,.nudge");if(r){e.preventDefault();if(r.dataset.id){if(A2Z_MODE){a2zOpen(+r.dataset.id);}else{openP(+r.dataset.id);}}else if(r.dataset.a)act(r.dataset.a,r)}});
$("scrim").onclick=function(){if(A2Z_MODE){a2zShut();}else{shut();}};$("shX").onclick=function(){if(A2Z_MODE){a2zShut();}else{shut();}};
$("pdX").onclick=function(){$("pdDlg").hidden=true};
$("pdDlg").onclick=function(e){if(e.target===this)this.hidden=true};
document.addEventListener("click",function(e){var r=e.target.closest(".row[data-id]");if(!r||r.closest("#v"))return;
 if(A2Z_MODE){a2zOpen(+r.dataset.id);}else{if(BY[r.dataset.id])openP(+r.dataset.id);}});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!$("ov").hidden){if(A2Z_MODE){a2zShut();}else{shut();}}});
$("xtab").onclick=function(e){var b=e.target.closest("button");if(b)xtShow(b.dataset.xt)};
$("lk").onclick=function(){ST.lock[CUR]=ST.lock[CUR]?0:1;save();var lock=isLock(CUR);
 $("lockChip").hidden=!lock;this.textContent=lock?"Mark as available":"Mark as subscription needed";
 $("sb").disabled=lock;$("sb").textContent=lock?"Locked":"Submit";
 $("cd").disabled=lock;render();toast(lock?"Marked 🔒 subscription-needed — it leaves the New queue":"Unlocked — back in the rotation")};
$("sb").onclick=function(){if(A2Z_MODE){var code=$("cd"),id=A2Z_CUR,sec=Math.round((Date.now()-A2Z_T0)/1000);
  if(!code.value||code.value.replace(/\s/g,"").length<15){$("w").className="warn";$("w").textContent="Nothing to submit — paste your code first.";code.focus();return}
  var t=ymd(),dd=a2zDay(t),first=!A2Z.p[id],p=A2Z.p[id]||(A2Z.p[id]={id:id,h:[],b:0,first:t});
  p.code=code.value;var note=$("nt").value.trim();if(note)p.note=note;
  p.time=(p.time||0)+sec;
  p.h.push({at:Date.now(),g:"local",s:sec,code:code.value,k:first?"n":"r",src:"a2z"});
  dd.s+=sec;dd.ids.push({id:id,k:first?"n":"r"});delete A2Z.dr[id];saveA2zState();
  A2Z_T0=Date.now();$("tm").textContent="00:00";
  var pill=$("svPill");pill.textContent="Saved ✓";pill.classList.remove("on");
  $("w").className="warn ok-msg";$("w").textContent="Submitted ✓ saved to A2Z — "+mm(sec)+" logged for today. Grading below still schedules the review.";
  toast("Submitted ✓ — "+mm(sec)+" logged");
  render();return}
var code=$("cd"),id=CUR,sec=Math.round((Date.now()-T0)/1000);
 if(isLock(id)){$("w").className="warn";$("w").textContent="Marked as subscription-needed — unlock it in Details to submit.";return}
 if(!code.value||code.value.replace(/\s/g,"").length<15){$("w").className="warn";$("w").textContent="Nothing to submit — paste your code first.";code.focus();return}
 var t=ymd(),dd=day(t),first=!ST.p[id],p=ST.p[id]||(ST.p[id]={id:id,h:[],b:0,first:t});
 p.code=code.value;var note=$("nt").value.trim();if(note)p.note=note;
 p.time=(p.time||0)+sec;
 p.h.push({at:Date.now(),g:"local",s:sec,code:code.value,k:first?"n":"r",src:"local"});
 dd.s+=sec;dd.ids.push({id:id,k:first?"n":"r"});
 delete ST.dr[id];save();
 T0=Date.now();$("tm").textContent="00:00";
 subRender(id);
 var pill=$("svPill");pill.textContent="Saved ✓";pill.classList.remove("on");
 $("w").className="warn ok-msg";$("w").textContent="Submitted ✓ saved on this device — "+mm(sec)+" logged for today. Grading below still schedules the review.";
 toast("Submitted ✓ — "+mm(sec)+" logged");
 render()};
$("pl").onclick=function(){if(A2Z_MODE){var id=A2Z_CUR,btn=this;btn.disabled=true;$("w").className="warn";$("w").textContent="Pulling from LeetCode…";
  pull(id).then(function(r){btn.disabled=false;if(r.error){$("w").textContent=r.error;return}
   var known=!!A2Z.lc[id],sec=Math.round((Date.now()-A2Z_T0)/1000),t=ymd(),dd=a2zDay(t),p=A2Z.p[id];
   applySub(id,r,sec);countNewDay(id,r.ts,known);
   if(sec&&p){dd.s+=sec;p.time=(p.time||0)+sec;dd.ids.push({id:id,k:p.old||p.due?"r":"n"})}
   saveA2zState();A2Z_T0=Date.now();$("tm").textContent="00:00";
   $("cd").value=r.code;$("lcSub").innerHTML='<p class="chip">Pulled from LeetCode — grade below to schedule A2Z review.</p>';
   $("w").className="warn ok-msg";$("w").textContent="Pulled "+r.lang+", "+r.runtime+" · submitted "+fmtTs(r.ts);a2zDrSave()})
  .catch(function(e){btn.disabled=false;btn.textContent="Try again";$("w").textContent=e.message})}return
var id=CUR,btn=this;btn.disabled=true;$("w").className="warn";$("w").textContent="Pulling from LeetCode…";
 pull(id).then(function(r){btn.disabled=false;if(r.error){$("w").textContent=r.error;return}
  var known=!!ST.lc[id],sec=Math.round((Date.now()-T0)/1000),t=ymd(),dd=day(t),p=ST.p[id];
  applySub(id,r,sec);countNewDay(id,r.ts,known);applyLsub(id,r);
  if(sec&&p){dd.s+=sec;p.time=(p.time||0)+sec;dd.ids.push({id:id,k:p.old||p.due?"r":"n"})}
  save();T0=Date.now();$("tm").textContent="00:00";
  $("cd").value=r.code;$("lcSub").innerHTML=subHTML(id);subRender(id);
  $("w").className="warn ok-msg";$("w").textContent="Pulled "+r.lang+", "+r.runtime+" · submitted "+fmtTs(r.ts);drSave()})
 .catch(function(e){btn.disabled=false;btn.textContent="Try again";$("w").textContent=e.message})};
$("lhs").onclick=function(){var id=CUR,btn=this;btn.disabled=true;btn.textContent="Loading…";
 pull(id).then(function(r){btn.disabled=false;btn.textContent="Load history from LeetCode";
  var n=applyLsub(id,r);subRender(id);
  if(n){$("w").className="warn ok-msg";$("w").textContent="Loaded "+n+" LeetCode submissions for this problem."}
  else{$("w").textContent=(r&&r.error)||"No submissions returned for this problem."}})
 .catch(function(e){btn.disabled=false;btn.textContent="Load history from LeetCode";$("w").textContent=e.message})};
Array.prototype.forEach.call(document.querySelectorAll("#shGr [data-g]"),function(b){b.onclick=function(){
  if(A2Z_MODE){var code=$("cd"),id=A2Z_CUR,sec=Math.round((Date.now()-A2Z_T0)/1000);
   if(code.value.replace(/\s/g,"").length<15){$("w").className="warn";$("w").textContent="Solution is empty — paste your accepted code first.";$("cd").focus();return}
   a2zFinish(id,b.dataset.g,code.value,$("nt").value.trim(),sec);
   delete A2Z.dr[id];saveA2zState();a2zShut(false);return}
  var code=$("cd").value;
  if(code.replace(/\s/g,"").length<15){$("w").className="warn";$("w").textContent="Solution is empty — paste your accepted code first.";$("cd").focus();return}
  var id=CUR;
  finish(id,b.dataset.g,code,$("nt").value.trim(),Math.round((Date.now()-T0)/1000));
  delete ST.dr[id];save();shut(false)}});
$("cd").addEventListener("input",function(){if(A2Z_MODE){a2zDraftSave();}else{drSave();}});
$("nt").addEventListener("input",function(){if(A2Z_MODE){a2zDraftSave();}else{drSave();}});
window.addEventListener("pagehide",function(){if(A2Z_MODE){a2zDrFlush();saveA2zState()}else{drFlush();save()}});
document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden"){if(A2Z_MODE){a2zDrFlush();saveA2zState()}else{drFlush();save()}}});
$("pBtn").onclick=function(){if(A2Z_MODE){a2zPomBtn();}else{pomBtn();}};$("pRs").onclick=function(){if(A2Z_MODE){a2zPomRs();}else{pomRs();}};$("pRs").innerHTML=ICO.rst;
if(navigator.storage&&navigator.storage.persist)navigator.storage.persist();

// Initialize: load from API (single source of truth) then render
async function init() {
  await loadFromAPI();
  await loadA2zState();
  render();
  pomTick();
  a2zPomRender();
  setInterval(pomTick, 1000);
  setInterval(a2zPomTick, 1000);
  setInterval(autoSync, 60000);
  setTimeout(autoSync, 20000);
}
init();
