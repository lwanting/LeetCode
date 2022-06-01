/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  /**
   * 给每个节点添加标记，访问过的节点flag置为true
   * 根据标记判断是否存在环
   */
  // let p = head;
  // while (p) {
  //   if (p.flag) {
  //     return true;
  //   }
  //   p.flag = true;
  //   p = p.next;
  // }
  // return false;

  /**
   * 快慢指针法：如果有环，快指针总会追上慢指针
   */
  // if (head === null || head.next === null) {
  //   return false;
  // }
  // let slow = head;
  // let fast = head;
  // while (fast != null && fast.next != null) {
  //   slow = slow.next;
  //   fast = fast.next.next;
  //   if (slow === fast) {
  //     return true;
  //   }
  // }
  // return false;

  /**
   * 天秀解法
   */
  try {
    JSON.stringify(head);
    return false;
  } catch {
    return true;
  }
};