/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
  /**
   * 动态规划
   */
  let result = nums[0];
  let max = result;
  let min = result;
  for (let i = 1; i < nums.length; i++) {
    const preMax = max;
    const preMin = min;
    max = Math.max(preMax * nums[i], preMin * nums[i], nums[i]);
    min = Math.min(preMax * nums[i], preMin * nums[i], nums[i]);
    result = Math.max(max, result);
  }
  return result;
};