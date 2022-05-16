/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  /**
   * 双指针法：快指针遇到重复元素就跳过，直到检索到不重复元素，用慢指针记录
   */
  const length = nums.length;
  if (length === 1) return 1;
  let i = 0;
  let j = i + 1;
  while (j < length) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j];
    }
    j++;
  }
  return i + 1;
};
