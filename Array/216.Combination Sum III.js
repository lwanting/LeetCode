/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
  /**
   * 回溯法：组合问题，无重复不可复选
   */
  const res = [];
  const track = [];
  let trackSum = 0;

  const backtrack = function(start) {
    if (trackSum > n) {
      return;
    }
    if (track.length === k && trackSum === n) {
      res.push(track.slice());
      return;
    }
    for (let i = start; i < 10; i++) {
      track.push(i);
      trackSum += i;
      backtrack(i + 1);
      track.pop();
      trackSum -= i;
    }
  }

  backtrack(1);
  return res;
};

console.log(combinationSum3(3, 7));