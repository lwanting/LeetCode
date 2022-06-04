/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  /**
   * 双指针法：由于数组有序，左右指针根据当前和与target的对比，逐渐向中间靠拢
   */
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right]
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }
  return [-1, -1];
};
