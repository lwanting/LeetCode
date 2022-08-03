/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
  /**
   * 子集问题：重复不可复选
   * 剪枝：同一节点下两条值相同的树枝只遍历第一条，其余的跳过
   */
  const res = [];
  const track = [];
  nums = nums.sort();

  const backtrack = function(start) {
    res.push(track.slice());
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      track.push(nums[i]);
      backtrack(i + 1);
      track.pop();
    }
  }

  backtrack(0);
  return res;
};