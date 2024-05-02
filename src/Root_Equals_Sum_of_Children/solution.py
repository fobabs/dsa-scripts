class TreeNode:
    def __int__(self, val: int=0, left: "TreeNode"=None, right: "TreeNode"=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def checkTree(self, root: TreeNode) -> bool:
        return root.val == root.left.val + root.right.val
    