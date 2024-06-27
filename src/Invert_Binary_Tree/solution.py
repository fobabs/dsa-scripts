class TreeNode:
    def __init__(self, val: int=0, left: "TreeNode"=None, right: "TreeNode"=None):
        self.val = val
        self.left = left
        self.right = right
    
class Solution:
    def invertTree(self, root: "TreeNode" | None) -> "TreeNode" | None: 
        if root is None:
            return None
        
        # Swap the left and right children of the current node
        root.left, root.right = root.right, root.left
        
        # Recursively invert the left and right subtrees
        self.invertTree(root.left)
        self.invertTree(root.right)

        return root
    