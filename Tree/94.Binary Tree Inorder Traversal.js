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
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
  /**
   * 递归
   */
  // const result = [];
  
  // const inorder = function (root) {
  //   if (!root) {
  //     return;
  //   }
  //   inorder(root.left);
  //   result.push(root.val);
  //   inorder(root.right);
  // }
  // inorder(root);
  // return result;

  /**
   * 迭代
   */
   const result = [];
   const stack = [];
   while (root || stack.length) {
     while (root) {
       stack.push(root);
       root = root.left;
     }
     root = stack.pop();
     result.push(root.val);
     root = root.right;
   }
   return result;
};