import { TreeNode } from '../models/tree-node';

export const rightSideView = (root: TreeNode | null): number[] => {
  const values: number[] = [];

  const dfs = (head: TreeNode | null, lvl = 0) => {
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