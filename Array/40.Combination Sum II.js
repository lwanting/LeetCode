/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
  /**
   * 回溯法：组合问题，可重复不可复选
   */
  const res = [];
  const track = [];
  let trackSum = 0;
  candidates = candidates.sort();

  const backtrack = function (start) {
    if (trackSum === target) {
      res.push(track.slice());
      return;
    }
    if (trackSum > target) {
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }
      track.push(candidates[i]);
      trackSum += candidates[i];
      backtrack(i + 1);
      track.pop();
      trackSum -= candidates[i];
    }
  }

  backtrack(0);
  return res;
};