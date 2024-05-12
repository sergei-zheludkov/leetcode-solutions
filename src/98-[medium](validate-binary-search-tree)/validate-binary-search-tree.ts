import { BinaryTreeNode } from '../models/binary-tree-node';

export const isValidBST = (root: BinaryTreeNode | null): boolean => {
  const dfs = (head: BinaryTreeNode | null, min: number, max: number): boolean => {
    if (!head) {
      return true;
    }

    if (!(min < head.val && head.val < max)) {
      return false;
    }

    return dfs(head.left, min, head.val) && dfs(head.right, head.val, max);
  };

  return dfs(root, -Infinity, Infinity);
};
