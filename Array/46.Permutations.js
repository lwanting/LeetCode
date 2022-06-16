/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  /**
   * 回溯：无重复不可复选，过滤重复节点
   */
  const result = [];
  const trace = [];

  const backtrack = (nums) => {
    if (trace.length === nums.length) {
      result.push(trace.concat());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      // 跳过重复节点
      if (trace.includes(nums[i])) {
        continue;
      }
      trace.push(nums[i]);
      backtrack(nums, i + 1);
      trace.pop(nums[i]);
    }
    trace.push()
  }

  backtrack(nums);
  return result;
};