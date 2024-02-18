// link to problem: https://leetcode.com/problems/binary-tree-postorder-traversal

import { TreeNode } from "./models/tree-node";

const test1_tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, new TreeNode(5, new TreeNode(9)), new TreeNode(6)), new TreeNode(4, new TreeNode(7), new TreeNode(8))));

// [1,null,2,3,4,5,6,7,8,9]

const postorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) {
    return [];
  }

  return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root?.val];
};

console.log(`test1: \n EXPECTED: 9,5,6,3,7,8,4,2,1 \n OUTPUT: ${postorderTraversal(test1_tree)}`);