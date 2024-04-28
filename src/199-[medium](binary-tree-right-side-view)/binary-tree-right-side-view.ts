import { BinaryTreeNode } from '../models/binary-tree-node';

export const rightSideView = (root: BinaryTreeNode | null): number[] => {
  const values: number[] = [];

  const dfs = (head: BinaryTreeNode | null, lvl = 0) => {
    if (!head) {
      return;
    }

    values[lvl] = head.val;

    dfs(head.left, lvl + 1);
    dfs(head.right, lvl + 1);
  };

  dfs(root);

  return values;
};