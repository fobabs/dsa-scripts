// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = val === undefined ? 0 : val
//     this.next = next === undefined ? null : next
// }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const insertionSortList = (head) => {
  const before = {
    val: -Number.MAX_VALUE,
    next: null,
  };

  while (head) {
    let prev = before;
    while (prev.next && prev.next.val < head.val) {
      prev = prev.next;
    }
    const next = head.next;
    [head.next, prev.next, head] = [prev.next, head, next];
  }
  return before.next;
};
