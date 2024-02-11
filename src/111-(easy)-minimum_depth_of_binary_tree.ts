// link to problem: https://leetcode.com/problems/minimum-depth-of-binary-tree

import { TreeNode } from "./models/tree-node";

const test1_tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const test2_tree = new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))));

function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  if (!root.left) {
    return 1 + minDepth(root?.right);
  }

  if (!root.right) {
    return 1 + minDepth(root?.left);
  }

  return 1 + Math.min(minDepth(root?.left),  minDepth(root?.right));
}

console.log(`test 1: \n Expected: 2 \n Output: ${minDepth(test1_tree)}`);
console.log(`test 2: \n Expected: 5 \n Output: ${minDepth(test2_tree)}`);

export { minDepth }