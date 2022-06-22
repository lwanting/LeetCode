/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  /**
   * 递归逐个求出计数结果
   */
  if (n === 1) {
    return '1';
  }
  return count(countAndSay(n - 1));
};
const count = (str) => {
  let newStr = '';
  let start = end = 0;
  while (end <= str.length) {
    if (str[start] === str[end]) {
      end++;
    } else {
      newStr += (end - start) + str[start];
      start = end;
    }
  }
  return newStr;
}
