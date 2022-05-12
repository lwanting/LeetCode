/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  /**
   * 暴力法：遍历链表获得链表长度，计算需要删除节点的位置，再遍历到该位置执行删除操作
   */
  // let length = 0;
  // let p = null;
  // const h = new ListNode();
  // h.next = head;
  // p = h;
  // while (p !== null) {
  //   p = p.next;
  //   length++;
  // }
  // let index = 0;
  // p = h;
  // while (index !== length - n - 1) {
  //   p = p.next;
  //   index++;
  // }
  // p.next = p.next.next;
  // return h.next;

  /**
   * 快慢指针法：两指针之间相差n个节点，当快指针到达链表末尾时，慢指针指向要删除节点的前一个节点
   */
  let h = new ListNode();
  h.next = head;
  let slow = h;
  let fast = h;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return h.next;
};
