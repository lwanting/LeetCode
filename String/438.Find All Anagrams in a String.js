/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  /**
   * 滑动窗口法
   */
  const result = [];
  let left = right = 0;
  const need = {};
  const window = {};
  let count = 0;
  for (let s of p) {
    need[s] = need[s] ? ++need[s] : 1;
  }
  while (right < s.length) {
    // 扩展窗口
    const r = s[right++];
    if (need[r]) {
      window[r] = window[r] ? ++window[r] : 1;
      if (window[r] === need[r]) {
        count++;
      }
    }
    while (count === Object.keys(need).length) {
      // 收缩窗口
      if (right - left === p.length) {
        // 记录
        result.push(left);
      }
      const l = s[left++];
      if (need[l]) {
        if (window[l] === need[l]) {
          count--;
        }
        window[l] = window[l] ? --window[l] : 0;
      }
    }
  }
  return result;
};
