/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  /**
   * 滑动窗口法
   */
  let left = right = 0;
  const need = {};
  const window = {};
  let count = 0;
  for (let s of s1) {
    need[s] = !need[s] ? 1 : ++need[s];
  }
  while (right < s2.length) {
    // 扩展窗口
    const s = s2[right++];
    if (need[s]) {
      window[s] = !window[s] ? 1 : ++window[s];
      if (window[s] === need[s]) {
        count++;
      }
    }
    while (count === Object.keys(need).length) {
      // 收缩窗口
      if (right - left === s1.length) {
        return true;
      }
      const l = s2[left++];
      if (need[l]) {
        if (window[l] === need[l]) {
          count--;
        }
        window[l] = !window[l] ? 0 : --window[l];
      }
    }
  }
  return false;
};
