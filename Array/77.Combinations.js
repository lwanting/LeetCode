/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
  /**
   * 回溯法：组合问题，无重复不可复选
   */
  const res = [];
  const track = [];

  const backtrack = function(start) {
    if (track.length === k) {
      res.push(track.slice());
      return;
    }
    for (let i = start; i <= n; i++) {
      track.push(i);
      backtrack(i + 1);
      track.pop();
    }
  }

  backtrack(1);
  return res;
};