/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  /**
   * BFS：逐个计算，将每一次的结果与下一位数字对应的字母组合
   */
  // let result = [];
  // let temp = [];
  // const length = digits.length;
  // if (!length) return result;

  // const map = {
  //   '2': ['a', 'b', 'c'],
  //   '3': ['d', 'e', 'f'],
  //   '4': ['g', 'h', 'i'],
  //   '5': ['j', 'k', 'l'],
  //   '6': ['m', 'n', 'o'],
  //   '7': ['p', 'q', 'r', 's'],
  //   '8': ['t', 'u', 'v'],
  //   '9': ['w', 'x', 'y', 'z'],
  // }
  // result = map[digits[0]];
  // for (let i = 1; i < length; i++) {
  //   temp = result.concat();
  //   result = [];
  //   for (let m = 0; m < temp.length; m++) {
  //     for (let n = 0; n < map[digits[i]].length; n++) {
  //       result.push(temp[m] + map[digits[i]][n]);
  //     }
  //   }
  // }
  // return result;

  /**
   * DFS回溯
   */
  let result = [];
  const length = digits.length;
  if (!length) return result;

  const map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };
  function backtrack(str, index) {
    if (index === digits.length) {
      result.push(str);
      return;
    }
    for (const s of map[digits[index]]) {
      backtrack(str + s, index + 1);
    }
  }
  backtrack('', 0);
  return result;
};
