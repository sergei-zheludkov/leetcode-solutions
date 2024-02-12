// link to problem: https://leetcode.com/problems/maximum-depth-of-binary-tree

import { TreeNode } from "./models/tree-node";

const test1_list = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const test2_list = new TreeNode(1, null, new TreeNode(2));

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

console.log(`test 1: \n Expected: 3 \n Output: ${maxDepth(test1_list)}`);
console.log(`test 2: \n Expected: 2 \n Output: ${maxDepth(test2_list)}`);

export { maxDepth };