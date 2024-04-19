import { TreeNode } from '../models/tree-node';

export const maxLevelSum = (root: TreeNode | null): number => {
  const values: number[] = [-Infinity];

  const dfs = (head: TreeNode | null, lvl = 1) => {
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
