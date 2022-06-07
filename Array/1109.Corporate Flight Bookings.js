/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
  /**
   * 差分数组：对区间进行增减，利用差分数组计算最终结果
   * 注意：区间边界的判断
   */
  const diffArr = new Array(n).fill(0);
  let answer = [];
  for (book of bookings) {
    const seat = book[2];
    diffArr[book[0] - 1] += seat;
    if (book[1] < n) {
      diffArr[book[1]] -= seat;
    }
  }
  answer[0] = diffArr[0];
  for (let i = 1; i < diffArr.length; i++) {
    answer[i] = answer[i - 1] + diffArr[i];
  }
  return answer;
};