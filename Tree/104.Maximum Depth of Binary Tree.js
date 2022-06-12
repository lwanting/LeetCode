/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let max = 0;
let depth = 0;
var maxDepth = function(root) {
  /**
   * 递归
   */
  // traverse(root);
  // return max;

  /**
   * DFS深度优先搜索
   */
  if (!root) {
    return;
  }
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};
const traverse = (root) => {
  if (!root) {
    return 0;
  }
  depth++;
  max = Math.max(max, depth);
  traverse(root.left);
  traverse(root.right);
  depth--;
};