/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  /**
   * 递归法：将反转区间内节点转换为反转前n个节点问题
   */
  // if (left === 1) {
  //   return reverseN(head, right);
  // }
  // head.next = reverseBetween(head.next, left - 1, right - 1);
  // return head;

  /**
   * 迭代法：从left开始两两反转
   */
  const h = new ListNode();
  h.next = head;
  let pre = h;
  let cur = null;
  let next = null;
  for (let i = 1; i < left; i++) {
    pre = pre.next;
  }
  cur = pre.next;
  for (let i = left; i < right; i++) {
    next = cur.next;
    cur.next = next.next;
    next.next = pre.next;
    pre.next = next;
  }
  return h.next;
};
let temp = null;
const reverseN = (head, n) => {
  if (n === 1) {
    temp = head.next;
    return head;
  }
  const last = reverseN(head.next, n - 1);
  head.next.next = head;
  head.next = temp;
  return last;
};