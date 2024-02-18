// link to problem: https://leetcode.com/problems/binary-tree-preorder-traversal

import { TreeNode } from "./models/tree-node";

const test1_tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, new TreeNode(4, new TreeNode(6), new TreeNode(7)), new TreeNode(5, new TreeNode(8), new TreeNode(9))), null));

const preorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) {
    return [];
  }

  return [root?.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
};

console.log(`test1: \n EXPECTED: 1,2,3,4,6,7,5,8,9 \n OUTPUT: ${preorderTraversal(test1_tree)}`);