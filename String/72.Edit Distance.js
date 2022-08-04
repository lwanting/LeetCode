/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
  /**
   * 动态规划：递归（自顶向下
   */
  // const len1 = word1.length;
  // const len2 = word2.length;
  // const memo = Array.from({ length: len1 },() => new Array(len2).fill(-1));

  // const dp = function(i, j) {
  //   if (i === -1) return j + 1;
  //   if (j === -1) return i + 1;
  //   if (memo[i][j] !== -1) return memo[i][j];

  //   if (word1[i] === word2[j]) {
  //     memo[i][j] = dp(i - 1, j - 1);  // 相等跳过
  //   } else {
  //     memo[i][j] = Math.min(
  //       dp(i, j - 1) + 1,  // 插入
  //       dp(i - 1, j) + 1,  // 删除
  //       dp(i - 1, j - 1) + 1  // 替换
  //     );
  //   }
  //   return memo[i][j];
  // }

  // return dp(len1 - 1, len2 - 1);

  /**
   * 动态规划：dp数组（自底向上
   */
   const len1 = word1.length;
   const len2 = word2.length;
   const dp = Array.from({ length: len1 + 1 }, () => new Array(len2 + 1).fill(-1));
   
   for (let i = 0; i <= len1; i++) {
     for (let j = 0; j <= len2; j++) {
       if (i === 0) {
         dp[i][j] = j;
       } else if (j === 0) {
         dp[i][j] = i;
       } else if (word1[i -1] === word2[j - 1]) {
         dp[i][j] = dp[i - 1][j -1];
       } else {
         dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
       }
     }
   }
   return dp[len1][len2];
};