/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  /**
   * 排序 + 贪心
   */
  intervals.sort((a, b) => a[0] - b[0]);
  let temp = intervals[0];
  const result = [];
  for (let i = 1; i < intervals.length; i++) {
    if (temp[1] >= intervals[i][0]) {
      temp[1] = Math.max(temp[1], intervals[i][1]);
    } else {
      result.push(temp);
      temp = intervals[i];
    }
  }
  result.push(temp);
  return result;
};
