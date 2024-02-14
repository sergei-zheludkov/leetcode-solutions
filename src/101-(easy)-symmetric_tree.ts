// link to problem: https://leetcode.com/problems/symmetric-tree

import { TreeNode } from "./models/tree-node";

const test1_tree = new TreeNode(1, new TreeNode(2, new TreeNode(3 ), new TreeNode(4 )),  new TreeNode(2, new TreeNode(4 ), new TreeNode(3 )));
const test2_tree = new TreeNode(1, new TreeNode(2, null, new TreeNode(3 )),  new TreeNode(2, null, new TreeNode(3 )));
const test3_tree = new TreeNode(0, new TreeNode(0, null, new TreeNode(0 )),  new TreeNode(0, null, new TreeNode(0 )));

const getBranchValues = (branch: TreeNode | null, direction: "left" | "right"): string => {
  if (!branch) {
    return 'null';
  }

  if (direction === 'left') {
    return `${branch?.val}${getBranchValues(branch.left, direction)}${getBranchValues(branch.right, direction)}`
  }

  if (direction === 'right') {
    return `${branch?.val}${getBranchValues(branch.right, direction)}${getBranchValues(branch.left, direction)}`
  }

  return "error";
};

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return getBranchValues(root?.left, 'left') === getBranchValues(root?.right, 'right');
}

console.log('test1: \n EXPECTED: true, \n OUTPUT:', isSymmetric(test1_tree))
console.log('test2: \n EXPECTED: false, \n OUTPUT:', isSymmetric(test2_tree))
console.log('test2: \n EXPECTED: false, \n OUTPUT:', isSymmetric(test3_tree))
