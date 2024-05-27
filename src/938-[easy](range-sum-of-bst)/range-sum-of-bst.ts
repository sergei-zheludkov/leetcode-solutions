import { BinaryTreeNode } from '../models/binary-tree-node';

export const rangeSumBST = (root: BinaryTreeNode | null, low: number, high: number): number => {
  let sum = 0;

  (function dfs(head: BinaryTreeNode | null) {
    if (!head) {
      return;
    }

    if (low <= head.val && head.val <= high) {
      sum += head.val;
    }

    dfs(head.left);
    dfs(head.right);
  })(root);

  return sum;
};
