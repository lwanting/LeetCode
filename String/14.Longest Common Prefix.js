/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  /**
   * 纵向扫描法：以第一个为基准，纵向比对获得公共前缀
   */
  // let prefix = '';
  // const base = strs[0];
  // for (let i = 0; i < base.length; i++) {
  //   for (let j = 0; j < strs.length; j++) {
  //     if (strs[j][i] !== base[i]) {
  //       return prefix;
  //     }
  //   }
  //   prefix += base[i];
  // }
  // return prefix;

  /**
   * 分治法：先将strs分解为(0, mid)和(mid+1, end)两个子问题，分别计算子问题的最长公共前缀
   * 再将子问题不断分解，最后得到整个strs的最长公共前缀
   */
  return lcp(0, strs.length - 1, strs);
};

function lcp(start, end, strs) {
  if (start === end) {
    return strs[start];
  }
  const mid = parseInt((start + end) / 2);
  const startStr = lcp(start, mid, strs);
  const endStr = lcp(mid + 1, end, strs);
  const minLength = Math.min(startStr.length, endStr.length);
  for (let i = 0; i < minLength; i++) {
    if (startStr[i] !== endStr[i]) {
      return startStr.slice(0, i);
    }
  }
  return startStr.slice(0, minLength);
}