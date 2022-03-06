/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  /**
   * map记录出现过的字符和下标，temp记录当前无重复最长子串
   * 出现重复字符就从重复字符下一个位置开始遍历
   * ps: 
   *   写的时候想的是直接找出无重复最长子串再计算长度，其实可以直接算长度
   */
  // let result = '';
  // let temp = '';
  // const map = new Map();
  // let i = 0;
  // while (i < s.length) {
  //   const str = s[i];
  //   if (!map.has(str)) {
  //     map.set(str, i);
  //     temp += str;
  //     i++;
  //     continue;
  //   }
  //   if (temp.length > result.length) {
  //     result = temp;
  //   }
  //   i = map.get(str) + 1;
  //   temp = '';
  //   map.clear();
  // }
  // if (temp.length > result.length) {
  //   result = temp;
  // }
  // return result.length;

  /**
   * 滑动窗口法：记录无重复子串开始和结束的位置，计算长度并比较
   * 注意：滑动窗口向后移动，开始和结束位置都只能向后不能出现前移
   */
  const length = s.length;
  if (length <= 1) {
    return length;
  }
  let start = 0;
  let end = 0;
  let max = 0;
  const window = new Map();
  while (end < length) {
    if (window.has(s[end])) {
      start = Math.max(window.get(s[end]) + 1, start);
    }
    window.set(s[end], end);
    max = Math.max(end - start + 1, max);
    end++;
  }
  return max;
};
