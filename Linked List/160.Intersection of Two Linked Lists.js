/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
  /**
   * 双指针法：为了使两个指针同时到达公共节点，将两条链表拼起来再遍历
   */
  let p1 = headA;
  let p2 = headB;
  while (p1 !== p2) {
    if (!p1) {
      p1 = headB;
    } else {
      p1 = p1.next;
    }
    if (!p2) {
      p2 = headA;
    } else {
      p2 = p2.next;
    }
  }
  return p1;
};