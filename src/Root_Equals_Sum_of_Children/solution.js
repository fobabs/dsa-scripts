/**
 * Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise
 * @param {TreeNode} root
 * @return {boolean}
 */

const checkTree = (root) => {
  return root.val == root.left.val + root.right.val;
};

// console.log(checkTree([10, 4, 6]));
// console.log(checkTree([5, 3, 1]));
