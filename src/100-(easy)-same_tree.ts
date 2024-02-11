// link to problem: https://leetcode.com/problems/same-tree

import { TreeNode } from "./models/tree-node";

const test1_tree1 = new TreeNode(1, new TreeNode(2 ), new TreeNode(3 ));
const test1_tree2 = new TreeNode(1, new TreeNode(2 ), new TreeNode(3 ));
const test2_tree1 = new TreeNode(1, new TreeNode(2 ));
const test2_tree2 = new TreeNode(1, null, new TreeNode(3 ));
const test3_tree1 = new TreeNode(1, new TreeNode(2 ), new TreeNode(1));
const test3_tree2 = new TreeNode(1, new TreeNode(1 ), new TreeNode(2));

function isSameTree(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
  if (tree1 === null && tree2 === null) {
    return true;
  }

  if (tree1 === null || tree2 === null) {
    return false;
  }

  if (tree1?.val !== tree2?.val) {
    return false;
  }

  return isSameTree(tree1?.left, tree2?.left) && isSameTree(tree1?.right, tree2?.right);
}

console.log('test1: \n EXPECTED: true, \n OUTPUT:', isSameTree(test1_tree1, test1_tree2))
console.log('test2: \n EXPECTED: false, \n OUTPUT:', isSameTree(test2_tree1, test2_tree2))
console.log('test3: \n EXPECTED: false, \n OUTPUT:', isSameTree(test3_tree1, test3_tree2))

export { isSameTree };