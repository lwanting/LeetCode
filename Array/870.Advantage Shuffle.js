/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
  /**
   * 贪心算法：如果num2中最大值大于nums1中最大值，就用nums1中的最小值去比，否则，就用最大值去比。
   * 注意：
   *   不能改变nums2中元素的顺序，需要一个变量存储nums2逆序排列的下标值
   */
  const len = nums1.length;
  let left = 0;
  let right = len - 1;
  const result = [];
  const nums2Desc = Array.from({ length: len }, (v, i) => i);
  nums2Desc.sort((a, b) => nums2[b] - nums2[a]);
  nums1.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    const index = nums2Desc[i];
    result[index] = nums2[index] >= nums1[right] ? nums1[left++] : nums1[right--];
  }
  return result;
};
