/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  /**
   * 快慢指针法
   */
  if (!head) {
    return null;
  }
  let slow = head;
  let fast = head;
  while (fast) {
    if (fast.val !== slow.val) {
      slow.next = fast;
      slow = fast;
    }
    fast = fast.next;
  }
  slow.next = null;
  return head;
};