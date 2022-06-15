/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  /**
   * 回溯算法：无重复可复选，注意剪枝
   */
  if (!candidates.length) return [];
  const result = [];
  const trace = [];
  let sum = 0;

  const backtrack = (candidates, start, target) => {
    if (sum === target) {
      // 注意拷贝路径数组
      result.push(trace.concat());
      return;
    }
    // 没有找到的出口
    if (sum > target) {
      return;
    }
    // 剪枝
    for (let i = start; i < candidates.length; i++) {
      trace.push(candidates[i]);
      sum += candidates[i];
      backtrack(candidates, i, target);
      trace.pop(candidates[i]);
      sum -= candidates[i];
    }
  };

  backtrack(candidates, 0, target);
  return result;
};

console.log(combinationSum([2, 3, 5], 8));
