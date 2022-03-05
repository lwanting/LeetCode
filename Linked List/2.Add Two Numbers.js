/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  /**
   * 暴力解法：遍历链表的获得实际数字，将两数相加，使用头插法得到结果链表
   * 注意：js中Int类型最多允许16位，将字符串转为数字时使用BigInt防止溢出
   */
  // let num1 = '';
  // let num2 = '';
  // let total = null;
  // let p = l1;
  // while(p) {
  //   num1 = p.val + num1;
  //   p = p.next;
  // }
  // p = l2;
  // while(p) {
  //   num2 = p.val + num2;
  //   p = p.next;
  // }
  // total = BigInt(num1) + BigInt(num2);
  // const totalStr = total.toString().replaceAll(',', '')
  // const result = new ListNode(0);
  // for (const i of totalStr) {
  //   const q = new ListNode(i);
  //   q.next = result.next;
  //   result.next = q;
  // }
  // return result.next

  /**
   * 逆序链表可逐位直接相加，向后进位
   * 注意：不要忘记最后一个进位
   */
  let p = l1;
  let q = l2;
  const result = new ListNode(0);
  let n = result
  let carry = 0;
  while(p || q) {
    const num1 = p ? p.val : 0;
    const num2 = q ? q.val : 0;
    const total = num1 + num2 + carry;
    carry = parseInt(total / 10);
    const node = new ListNode(total % 10);
    n.next = node;
    n = node;
    if (p) {
      p = p.next;
    }
    if (q) {
      q = q.next;
    }
  }
  if (carry) {
    const node = new ListNode(carry);
    n.next = node;
  }
  return result.next;
};
