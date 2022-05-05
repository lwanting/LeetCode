/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  /**
   * 利用js特性：将数字转为数组，翻转后再转回数字
   * 注意：负号在转回数字时会丢失
   */
  // let result = 0;
  // const max = Math.pow(2, 31) - 1;
  // const min = Math.pow(-2, 31);
  // const reverseArr = x.toString().split('').reverse();
  // result = parseInt(reverseArr.join(''));
  // if (x < 0) {
  //   result = -result;
  // }
  // result = result > max || result < min ? 0 : result;
  // return result;
  
  /**
   * 数学方法：从个位数逐个提取并加入结果的末尾
   */
  let result = 0;
  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(-2, 31);
  while (x !== 0) {
    console.log(x);
    const digit = x % 10;
    x = ~~(x / 10);
    result = result * 10 + digit;
    if (result > max || result < min ) {
      return 0;
    }
  }
  return result;
};
