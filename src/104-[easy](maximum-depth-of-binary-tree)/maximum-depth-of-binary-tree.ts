import { BinaryTreeNode } from '../models/binary-tree-node';

export const maxDepth = (root: BinaryTreeNode | null): number => {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
