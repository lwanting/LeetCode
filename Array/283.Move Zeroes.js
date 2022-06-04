/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  /**
   * 双指针法：快慢指针
   */
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  while (slow < nums.length) {
    nums[slow++] = 0;
  }
  return nums;
};