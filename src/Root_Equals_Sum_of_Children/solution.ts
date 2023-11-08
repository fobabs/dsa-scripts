/**
 * Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise
 * @param {TreeNode} root
 * @return {boolean}
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val),
    this.left = (left === undefined ? null : left),
    this.right = (right === undefined ? null : right)
  }
}

const checkTree = (root: TreeNode | null): boolean => {
  if (!root) {
    return false
  }
  return root.val === root.left!.val + root.right!.val
}
