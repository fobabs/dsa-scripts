/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Returns an inverted tree node (Recursive Solution)
 * @param {TreeNode} root
 * @returns {TreeNode}
 */
// const invertTree = function (root) {
//   if (!root) {
//     return root;
//   }
//   const left = invertTree(root.left);
//   const right = invertTree(root.right);
//   root.left = right;
//   root.right = left;
//   return root;
// };

// OR
const invertTree = function (root) {
  if (!root) {
    return root;
  }
  [root.right, root.left] = [root.left, root.right];
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

// OR
// const invertTree = function (root) {
//   const inverted = (node) => {
//     if (!node) {
//       return;
//     }
//     [node.left, node.right] = [node.right, node.left];
//     invertTree(node.left);
//     invertTree(node.right);
//   };
//   inverted(root);
//   return root;
// };

// console.log(invertTree([4, 2, 7, 1, 3, 6, 9]));
// console.log(invertTree([2, 1, 3]));
// console.log(invertTree([]));
