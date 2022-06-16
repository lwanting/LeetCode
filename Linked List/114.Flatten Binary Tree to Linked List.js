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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  /**
   * 将左右子树分别拉平后拼接
   */
  if (!root) {
    return;
  }
  flatten(root.left);
  flatten(root.right);
  // 将左子树转为右子树
  const left = root.left;
  const right = root.right;
  root.right = left;
  root.left = null;
  // 将右子树拼在当前右子树的右子树
  let p = root;
  while (p.right) {
    p = p.right;
  }
  p.right = right;
};