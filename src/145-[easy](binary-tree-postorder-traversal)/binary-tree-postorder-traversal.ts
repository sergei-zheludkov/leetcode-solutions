import { BinaryTreeNode } from '../models/binary-tree-node';

export const postorderTraversal = (root: BinaryTreeNode | null): number[] => {
  if (!root) {
    return [];
  }

  return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root?.val];
};
