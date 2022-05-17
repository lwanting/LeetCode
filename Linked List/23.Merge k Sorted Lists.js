/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
  /**
   * 分治法: 两两合并
   */
  if (lists.length === 0) return null;
  return mergeList(0, lists.length - 1, lists);
  
  function mergeList(start, end, lists) {
    if (start === end) {
      return lists[start];
    }
    const mid = parseInt((start + end) / 2);
    const leftList = mergeList(start, mid, lists);
    const rightList = mergeList(mid + 1, end, lists);
    return merge(leftList, rightList);
  }
  function merge(left, right) {
    const h = new ListNode();
    let p = h;
    while (left && right) {
      if (left.val < right.val) {
        p.next = left;
        left = left.next;
      } else {
        p.next = right;
        right = right.next;
      }
      p = p.next;
    }
    p.next = left ? left : right;
    return h.next;
  }
  /**
   * 偷懒：将链表数组转为数组，使用sort方法排序后再转为链表
   */
  //  const arr = [];
  //  for (let i = 0; i < lists.length; i++) {
  //    let p = lists[i];
  //    while (p) {
  //      arr.push(p.val);
  //      p = p.next;
  //    }
  //  }
  //  const sortArr = arr.sort((a, b) => a - b);
  //  const h = new ListNode();
  //  let p = h;
  //  for (let i = 0; i < sortArr.length; i++) {
  //      p.next = new ListNode(sortArr[i]);
  //      p = p.next;
  //  }
  //  return h.next;
};