/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  /**
   * 排序+双指针法：将数组升序排列，两重循环固定前两个数，
   * 由于数组是升序的，第二重循环中使用双指针从而省去了第三重循环
   * 注意：
   *   1. 跳过每轮循环中的重复数字以提高效率
   *   2. 数组长度以及排序后第一个数的大小可以直接判断是否存在三数之和为0
   */
  const length = nums.length;
  if (length < 3) {
    return [];
  }
  const result = []
  nums = nums.sort((a, b) => a - b);
  if (nums[0] > 0) return result;
  for (let first = 0; first < length; first++) {
    // 跳过重复数字
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    let third = length - 1;
    const target = -nums[first];
    for (let second = first + 1; second < length - 1; second++) {
      // 跳过重复数字
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue;
      }
      while (second < third && nums[second] + nums[third] > target) {
        --third;
      }
      if (second === third) break;
      if (nums[second] + nums[third] === target) {
        result.push([nums[first], nums[second], nums[third]]);
      }
    }
  }
  return result;
};

console.log(threeSum([1,2,-2,-1]));