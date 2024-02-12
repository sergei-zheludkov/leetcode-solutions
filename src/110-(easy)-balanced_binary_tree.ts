// link to problem: https://leetcode.com/problems/balanced-binary-tree

import { TreeNode } from "./models/tree-node";
import { maxDepth } from "./104-(easy)-maximum_depth_of_binary_tree";

const test1_tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const test2_tree = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(3)), new TreeNode(2));

function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1
    ? isBalanced(root.left) && isBalanced(root.right)
    : false;
}

console.log(`test 1: \n Expected: true \n Output: ${isBalanced(test1_tree)}`);
console.log(`test 2: \n Expected: false \n Output: ${isBalanced(test2_tree)}`);

export { isBalanced };
