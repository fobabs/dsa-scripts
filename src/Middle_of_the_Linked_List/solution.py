class ListNode:
    def __init__(self, val: int=0, next: "ListNode"=None) -> None:
        self.val = val
        self.next = next

class Solution:
    def middleNode(self, head: ListNode | None) -> ListNode | None:
        middle = head
        end = head
        while end and end.next:
            middle = middle.next
            end = end.next.next
        return middle
