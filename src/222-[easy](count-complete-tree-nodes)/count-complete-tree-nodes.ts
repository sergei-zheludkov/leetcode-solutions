import { BinaryTreeNode } from '../models/binary-tree-node';

export const countNodes = (root: BinaryTreeNode | null): number => {
  if (!root) {
    return 0;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
};
