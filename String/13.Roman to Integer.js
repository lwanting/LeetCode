/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  /**
   * 遍历字符串，若右边字符数值比当前数值大，则算出差值加入结果值
   */
  // const length = s.length;
  // let result = 0;
  // const map = {
  //   'I': 1,
  //   'V': 5,
  //   'X': 10,
  //   'L': 50,
  //   'C': 100,
  //   'D': 500,
  //   'M': 1000
  // }
  // let i = 0;
  // while (i < length) {
  //   const value = map[s[i]];
  //   if (i + 1 < length) {
  //     const nextValue = map[s[i + 1]]
  //     if (nextValue > value) {
  //       result += nextValue - value;
  //       i = i + 2;
  //     } else {
  //       result += value;
  //       i++;
  //     }
  //   } else {
  //     result += value;
  //     break;
  //   }
  // }
  // return result;

  /**
   * 优化：无需计算差值，若右边字符数值比当前数值大，将当前值取反加入结果值
   */
   const length = s.length;
   let result = 0;
   const map = {
     'I': 1,
     'V': 5,
     'X': 10,
     'L': 50,
     'C': 100,
     'D': 500,
     'M': 1000
   }
   let i = 0;
   while (i < length) {
     const value = map[s[i]];
     if (i + 1 < length && map[s[i + 1]] > value) {
       result -= value;
     } else {
       result += value;
     }
     i++;
   }
   return result;
};
