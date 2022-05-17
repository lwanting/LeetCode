/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
  /**
   * 暴力解法
   */
  // const haystackLen = haystack.length;
  // const needleLen = needle.length;
  // if (needleLen === 0) return 0;
  // for(let i = 0; i < haystackLen; i++) {
  //   let temp = i;
  //   let j = 0;
  //   while (j < needleLen && haystack[temp] === needle[j]) {
  //     temp++;
  //     j++;
  //   }
  //   if (j === needleLen) return i;
  // }
  // return -1;

  /**
   * KMP
   * 重点：构建next数组，回溯最长重复前缀
   */
  const haystackLen = haystack.length;
  const needleLen = needle.length;
  if (needleLen === 0) return 0;
  // 获取next数组
  const next = [0];
  for (let left = 0, right = 1; right < needleLen; right++) {
    while (left > 0 && needle[left] !== needle[right]) {
      left = next[left - 1];
    }
    if (needle[left] === needle[right]) {
      left++;
    }
    next[right] = left;
  }
  for (let i = 0, j = 0; i < haystackLen; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j++;
    }
    if (j === needleLen) return i - needleLen + 1;
  }
  return -1;
};
