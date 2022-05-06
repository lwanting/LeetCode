/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  /**
   * 去除前后空格后遍历字符串，使用正则表达式判断正负号和数字
   * 注意：各种边界条件
   */
  // s = s.trim();
  // let isNegative = false;
  // let result = '';
  // const max = Math.pow(2, 31) - 1;
  // const min = Math.pow(-2, 31);
  // for (let i = 0; i < s.length; i++) {
  //   if (i === 0 && /\+|\-/.test(s[i])) {
  //   isNegative = s[i] === '-';
  //     continue;
  //   }
  //   if (/\d/.test(s[i])) {
  //     result += s[i];
  //   } else {
  //     break;
  //   }
  // }
  // result = parseInt(result) || 0;
  // if (isNegative) {
  //   result =  -result < min ? min : -result;
  // }
  // result = result > max ? max : result;
  // return result;

  /**
   * 自动机法：使用状态表得出从字符串到整数的处理路线
   */
  const automaton = new Automaton();
  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(-2, 31);
  for (let i = 0; i < s.length; i++) {
    automaton.transform(s[i]);
  }
  let result = automaton.result
  if (automaton.isNegative) {
    result = -result < min ? min : -result;
  }
  result = result > max ? max : result;
  return result;
};

class Automaton {
  constructor() {
    this.result = 0;
    this.isNegative = false;
    this.state = 'start';
    this.mapState = {
      'start': ['start', 'sign', 'number', 'end'],
      'sign': ['end', 'end', 'number', 'end'],
      'number': ['end', 'end', 'number', 'end'],
      'end': ['end', 'end', 'end', 'end']
    }
  }
  getState(str) {
    if (str === ' ') {
      return 0;
    } else if (/\+|\-/.test(str)) {
      return 1;
    } else if (/\d+/.test(str)) {
      return 2;
    } else {
      return 3;
    }
  }
  transform(str) {
    this.state = this.mapState[this.state][this.getState(str)];
    if (this.state === 'sign') {
      this.isNegative = str === '-';
    } else if (this.state === 'number') {
      this.result = this.result * 10 + parseInt(str);
    }
  }
}
