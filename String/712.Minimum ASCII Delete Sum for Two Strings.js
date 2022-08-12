/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
 var minimumDeleteSum = function(s1, s2) {
  /**
   * 动态规划
   */
  const m = s1.length + 1;
  const n = s2.length + 1;
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));
  // 边界条件
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + s1[i - 1].charCodeAt();
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + s2[j - 1].charCodeAt();
  }
  for (let i = 1; i < m; i++) {
    const code1 = s1[i - 1].charCodeAt();
    for (let j = 1; j < n; j++) {
      const code2 = s2[j - 1].charCodeAt();
      if (code1 === code2) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j] + code1, dp[i][j - 1] + code2);
      }
    }
  }
  return dp[m - 1][n - 1];
};