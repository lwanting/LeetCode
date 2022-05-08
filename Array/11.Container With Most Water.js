/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  /**
   * 第一个想到的暴力解法，但是超时了😂
   */
  // let max = 0;
  // const length = height.length;
  // for (let i = 0; i < length; i++) {
  //   for (let j = 1; j < length; j++) {
  //     const h = Math.min(height[i], height[j]);
  //     const area = (j - i) * h;
  //     max = area > max ? area : max;
  //   }
  // }
  // return max;

  /**
   * 双指针法：左右两个指针，每次移动高度较小的指针，计算面积并比较
   * 移动高度较小指针的原因：
   *   area = min(h1, h2) * distance
   *   如果移动高度较大的指针，那么在最小高度保持不变的情况下，距离也在逐渐减小
   *   面积必然会越来越小，所以应该移动高度较小的指针
   */
  let l = 0;
  let r = height.length;
  let maxArea = 0;
  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l);
    maxArea = area > maxArea ? area : maxArea
    if (height[l] <= height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxArea;
};
