/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
  /**
   * 回溯法：排列问题，可重复不可复选
   * 剪枝：固定重复元素的相对位置
   */
  const res = [];
  const track = [];
  const used = [];

  const backtrack = function() {
    if (track.length === nums.length) {
      res.push(track.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }
      track.push(nums[i]);
      used[i] = true;
      backtrack();
      track.pop();
      used[i] = false;
    }
  }

  backtrack();
  return res;
};