/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
   /**
    * 先将两个数组合并，再计算中位数
    */
  const len1 = nums1.length;
  const len2 = nums2.length;
  let i = j = 0;
  let arr = [];
  while (i < len1 && j < len2) {
    if (nums1[i] <= nums2[j]) {
      arr.push(nums1[i]);
      i++;
    } else {
      arr.push(nums2[j]);
      j++;
    }
  }
  if (i < len1) {
    arr = arr.concat(nums1.slice(i, len1));
  }
  if (j < len2) {
    arr = arr.concat(nums2.slice(j, len2));
  }
  const len = len1 + len2;
  if (len % 2) {
    const index = Math.floor(len / 2);
    return arr[index];
  }
  const index1 = Math.floor(len / 2);
  const index2 = index1 - 1;
  return (arr[index1] + arr[index2]) / 2;

  /**
   * 占坑：log(m+n)时间复杂度
   */
};

console.log(findMedianSortedArrays([1, 3], [4]));