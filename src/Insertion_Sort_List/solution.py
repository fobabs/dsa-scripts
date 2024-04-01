# Definition for singly-linked list.
class ListNode:
    def __init__(self, val: int=0, next: "ListNode"=None):
        self.val = val
        self.next = next

class Solution:
    def insertionSortList(head: ListNode | None) -> ListNode | None:
        if not head or not head.next:
            return head
        
        dummy = ListNode(0) # Dummy node to handle the sorted part of the list
        curr = head

        while curr:
            prev, next_node = dummy, dummy.next
            while next_node:
                if curr.val < next_node.val:
                    break
                prev, next_node = next_node, next_node.next

            temp = curr.next
            curr.next = next_node
            prev.next = curr
            curr = temp

        return dummy.next
    