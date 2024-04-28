import { BinaryTreeNode } from '../models/binary-tree-node';

export const maxLevelSum = (root: BinaryTreeNode | null): number => {
  const values: number[] = [-Infinity];

  const dfs = (head: BinaryTreeNode | null, lvl = 1) => {
    if (!head) {
      return;
    }

    if (values[lvl]) {
      values[lvl] += head.val;
    } else {
      values[lvl] = head.val;
    }

    dfs(head.left, lvl + 1);
    dfs(head.right, lvl + 1);
  };

  dfs(root);

  const max = Math.max(...values);

  return values.findIndex((num) => num === max);
};
