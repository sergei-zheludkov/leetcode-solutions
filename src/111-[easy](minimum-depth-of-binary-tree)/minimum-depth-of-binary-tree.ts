import { BinaryTreeNode } from '../models/binary-tree-node';

export const minDepth = (root: BinaryTreeNode | null): number => {
  if (!root) {
    return 0;
  }

  if (!root.left) {
    return 1 + minDepth(root?.right);
  }

  if (!root.right) {
    return 1 + minDepth(root?.left);
  }

  return 1 + Math.min(minDepth(root?.left),  minDepth(root?.right));
};
