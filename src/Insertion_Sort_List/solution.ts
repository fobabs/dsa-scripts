// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const insertionSortList = (head: ListNode | null): ListNode | null => {
  const before = {
    val: -Number.MAX_VALUE,
    next: null,
  }
  while (head) {
    let prev = before as ListNode
    while (prev.next && prev.next.val < head.val) {
      prev = prev.next
    }
    const next = head.next;
    [head.next, prev.next, head] = [prev.next, head, next]
  }
  return before.next
}
