// link to problem: https://leetcode.com/problems/binary-tree-inorder-traversal

import { TreeNode } from "./models/tree-node";

const test1_tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
const test2_tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, new TreeNode(5, new TreeNode(8))), new TreeNode(4, new TreeNode(6, new TreeNode(9), new TreeNode(10)), new TreeNode(7, null, new TreeNode(11)))));
const test3_tree = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(8), new TreeNode(9)), new TreeNode(5, new TreeNode(10), new TreeNode(11))), new TreeNode(3, new TreeNode(6), new TreeNode(7)));

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right),]
}

console.log(`test 1: \n Expected: 1,3,2 \n Output: ${inorderTraversal(test1_tree)}`);
console.log(`test 2: \n Expected: 1,3,8,5,2,9,6,10,4,7,11 \n Output: ${inorderTraversal(test2_tree)}`);
console.log(`test 3: \n Expected: 8,4,9,2,10,5,11,1,6,3,7 \n Output: ${inorderTraversal(test3_tree)}`);

export { inorderTraversal };