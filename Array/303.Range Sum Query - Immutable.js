/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  /**
   * 前缀和
   */
  this.prefixSum = [0];
  for (let i = 1; i <= nums.length; i++) {
    this.prefixSum[i] = this.prefixSum[i - 1] + nums[i - 1];
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.prefixSum[right + 1] - this.prefixSum[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */