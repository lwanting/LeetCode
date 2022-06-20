/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  /**
   * 二分法：若左侧有序且target值在nums[left]和nums[mid]间，则去左边找，否则去右边找；右侧有序同理
   */
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (nums[left] <= nums[mid - 1]) {
      if ( target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};