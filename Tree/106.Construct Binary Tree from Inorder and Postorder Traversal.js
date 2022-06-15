/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  /**
   * 递归：画图分析后序遍历和中序遍历划分左右子树对应关系，注意划分边界
   */
  const inStart = 0;
  const inEnd = inorder.length - 1;
  const postStart = 0;
  const postEnd = postorder.length - 1;
  return build(inorder, inStart, inEnd, postorder, postStart, postEnd);
};
const build = (inorder, inStart, inEnd, postorder, postStart, postEnd) => {
  if (postStart > postEnd) {
    return null;
  }
  const val = postorder[postEnd]
  const root = new TreeNode(val);
  // 可使用map优化
  const index = inorder.findIndex((item, i) => {
    if (item === val) {
      return i;
    }
  });
  root.left = build(inorder, inStart, index - 1, postorder, postStart, postEnd + index - inStart);
  root.right = build(inorder, index + 1, inEnd, postorder, postEnd + index - inStart + 1, postEnd - 1);
  return root;
};