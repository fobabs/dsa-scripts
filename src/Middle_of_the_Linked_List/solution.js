/**
 * Returns the middle node of the linked list
 * @param {ListNode} head
 * @return {ListNode}
 */

const middleNode = (head) => {
  let middle = head;
  let end = head;
  while (end && end.next) {
    middle = middle.next;
    end = end.next.next;
  }
  return middle;
};

// console.log(middleNode([1, 2, 3, 4, 5]));
// console.log(middleNode([1, 2, 3, 4, 5, 6]));
