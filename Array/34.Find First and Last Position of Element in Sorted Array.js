/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  /**
   * 二分查找：注意左右边界的取值
   */
  return [searchLeft(nums, target), searchRight(nums, target)];
};
// 找左边界
const searchLeft = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    // 防止左右边界相加后溢出
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] >= target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  if (nums[left] === target) return left;
  return -1;
};
// 找右边界
const searchRight = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  if (nums[right] === target) return right;
  return -1;
};
