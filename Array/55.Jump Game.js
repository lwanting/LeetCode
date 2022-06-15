/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  /**
   * 贪心：记录最远可以到达的位置，并不断更新，若最远位置大于末尾位置，则返回true
   */
  const length = nums.length;
  let position = 0;
  for (let i = 0; i < length; i++) {
    if (i <= position) {
      position = Math.max(position, i + nums[i]);
      if (position >= length - 1) {
        return true;
      }
    }
  }
  return false;
};