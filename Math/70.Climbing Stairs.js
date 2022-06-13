/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  /**
   * 动态规划：状态转移方程： f(n) = f(n-1) + f(n-2)
   * 注意：最好从f(3)开始，否则f(0)和f(1)会错误计算出2的值
   */
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
