/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  /**
   * 使用set记录
   */
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
      continue;
    }
    set.add(nums[i]);
  }
  for (let item of set) {
    return item;
  }

  /**
   * 位运算：不使用额外空间，利用异或
   * a ^ a = 0
   * a ^ 0 = a
   * a ^ b ^ a = b ^ a ^ a = b ^ (a ^ a) = b ^ 0 = b
   */
   const result = nums.reduce((pre, cur) => pre ^ cur, 0);
   return result;
};