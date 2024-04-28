import { BinaryTreeNode } from '../models/binary-tree-node';

export const levelOrder = (root: BinaryTreeNode | null): number[][] => {
  const result: number[][] = [];

  const dfs = (head: BinaryTreeNode | null, i = 0) => {
    if (!head) {
      return [];
    }

    if (result[i]) {
      result[i].push(head.val);
    } else {
      result[i] = [head.val];
    }

    dfs(head.left, i + 1);
    dfs(head.right, i + 1);

    return result;
  };

  return dfs(root);
};
