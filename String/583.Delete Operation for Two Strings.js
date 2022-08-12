/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
  const m = word1.length + 1;
  const n = word2.length + 1;
  const dp = Array.from({ length: m }, () => new Array(n));
  for (let i = 0; i < m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }
  return dp[m - 1][n - 1];
};