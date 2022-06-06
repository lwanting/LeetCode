/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  /**
   * 差分数组：对区间进行增减，最后判断每站人数是否超过规定值
   */
  const diffArr = new Array(1000).fill(0);
  let passenger = 0;
  for (let trip of trips) {
    const num = trip[0];
    diffArr[trip[1]] += num;
    diffArr[trip[2]] -= num;
  }
  for (let i = 0; i < diffArr.length; i++) {
    passenger += diffArr[i];
    if (passenger > capacity) {
      return false;
    }
  }
  return true;
};