/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  /**
   * 动态规划：构建dp数组，dp[i] = max(dp[0]到dp[i-1]中小于dp[i]的元素) + 1
   */
  const len = nums.length;
  const dp = new Array(len).fill(1);
  let max = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  for (let i = 0; i < len; i++) {
    max = Math.max(dp[i], max);
  }
  return max;
};
