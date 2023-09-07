
// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

/**
 * Returns an inverted tree node (Recursive Solution)
 * @param {TreeNode} root
 * @returns {TreeNode}
 */

const invertTree = (root: TreeNode | null): TreeNode | null => {
  if (!root) {
    return root
  }
  [root.right, root.left] = [root.left, root.right]
  invertTree(root?.left)
  invertTree(root?.right)
  return root
}
