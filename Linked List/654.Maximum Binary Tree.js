/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (!nums.length) return null;
  return build(nums, 0, nums.length - 1);
};
const build = (nums, start, end) => {
  if (start > end) {
    return null;
  }
  const index = findMaxIndex(nums, start, end);
  const root = new TreeNode(nums[index]);
  root.left = build(nums, start, index - 1);
  root.right = build(nums, index + 1, end);
  return root;
};
const findMaxIndex = (nums, start, end) => {
  let index = start;
  for (let i = start; i <= end; i++) {
    if (nums[index] < nums[i]) {
      index = i;
    }
  }
  return index;
};