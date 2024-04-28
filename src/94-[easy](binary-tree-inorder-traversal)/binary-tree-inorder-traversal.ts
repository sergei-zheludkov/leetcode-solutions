import { BinaryTreeNode } from '../models/binary-tree-node';

export const inorderTraversal = (root: BinaryTreeNode | null): number[] => {
  if (!root) {
    return [];
  }

  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};
