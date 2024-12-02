import { BinaryTreeNode } from '../models/binary-tree-node';

export const longestZigZag = (tree: BinaryTreeNode | null): number => {
  if (!tree) {
    return 0;
  }

  const dfs = (head: BinaryTreeNode | null, direction: 0 | 1, max = 0): number => {
    if (!head) {
      return max;
    }

    return direction
      ? Math.max(dfs(head.left, 0,max + 1), dfs(head.right, 1, 0))
      : Math.max(dfs(head.right, 1,max + 1), dfs(head.left, 0, 0));
  };


  return Math.max(dfs(tree.left, 0), dfs(tree.right, 1));
};
