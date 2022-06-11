/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
/**
 * 递归：画图分析前序遍历和中序遍历划分左右子树对应关系，
 */
const inorderMap = new Map();
var buildTree = function(preorder, inorder) {
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }
  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};
const build = (preorder, preStart, preEnd, inorder, inStart, inEnd) => {
  if (preStart > preEnd) {
    return null;
  }
  const val = preorder[preStart];
  const index = inorderMap.get(val);
  const root = new TreeNode(val);
  const num = index - inStart;
  root.left = build(preorder, preStart + 1, preStart + num, inorder, inStart, index - 1);
  root.right = build(preorder, preStart + num + 1, preEnd, inorder, index + 1, inEnd);
  return root;
};