import { TreeNode } from '../models/tree-node';

export const averageOfLevels = (root: TreeNode | null): number[] => {
  const values: [number, number][] = []; // sum, count

  const dfs = (head: TreeNode | null, lvl = 0) => {
    if (!head) {
      return;
    }

    if (values[lvl]) {
      values[lvl] = [values[lvl][0] + head.val, values[lvl][1] + 1];
    } else {
      values[lvl] = [head.val, 1];
    }

    dfs(head.left, lvl + 1);
    dfs(head.right, lvl + 1);
  };

  dfs(root);

  return values.map(([sum, count]) => sum / count);
};