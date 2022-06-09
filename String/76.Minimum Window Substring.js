/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  /**
   * 滑动窗口法
   */
  let left = right = 0;
  const need = window = {};
  let count = 0;
  let min = Infinity;
  let start = 0;
  for (let s of t) {
    need[s] = need[s] ? ++need[s] : 1;
  }
  while (right < s.length) {
    // 扩展窗口
    const r = s[r++];
    if (need[r]) {
      window[r] = window[r] ? ++window[r] : 1;
      if (window[r] === need[r]) {
        count++;
      }
    }
    while (count === Object.keys(need).length) {
      // 收缩窗口
      if (right - left < min) {
        // 记录
        min = right - left;
        start = left;
      }
      const l = s[l++];
      if (need[l]) {
        if (window[l] === need[l]) {
          count--;
        }
        window[l] = window[l] ? --window[l] : 0;
      }
    }
  }
  return s.slice(start, start + min);
};