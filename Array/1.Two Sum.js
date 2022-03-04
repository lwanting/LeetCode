/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  /** 
   * 双重循环查找元素
   */
  // const length = nums.length;
  // for (let i = 0; i < length; i++) {
  //   const remain = target - nums[i];
  //   for (let j = i + 1; j < length; j++) {
  //     if (nums[j] === remain) {
  //       return [i, j];
  //     }
  //   }
  // }
  // return []

  /**
   * 使用Map,只需要一次遍历
   */
   const map = new Map();
   for (let i in nums) {
     const remain = target - nums[i];
     console.log(map.has(nums[i]));
     if (map.has(nums[i])) {
       return [map.get(nums[i]), i];
     }
     map.set(remain, i);
   }
};
console.log(twoSum([2,7,11,15], 13));