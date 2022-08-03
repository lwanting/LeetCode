/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  /**
   * 子集问题：无重复不可复选
   */
  const res = [];
  const track = [];

  const backtrack = function(start) {
    res.push(track.slice());

    for (let i = start; i < nums.length; i++) {
      track.push(nums[i]);
      backtrack(i + 1);
      track.pop();
    }
  }

  backtrack(0);
  return res;
};