import { TreeNode } from '../models/tree-node';

export const sumNumbers = (root: TreeNode | null): number => {
  let sum = 0;

  const dfs = (head: TreeNode | null, num = '') => {
    if (head && !head.left && !head.right) {
      sum += Number(`${num}${head.val}`);
      return;
    }

    if (head?.left) {
      dfs(head.left, `${num}${head.val}`);
    }

    if (head?.right) {
      dfs(head.right, `${num}${head.val}`);
    }
  };

  dfs(root);

  return sum;
};