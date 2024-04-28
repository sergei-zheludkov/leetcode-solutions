import { BinaryTreeNode } from '../models/binary-tree-node';

export const preorderTraversal = (root: BinaryTreeNode | null): number[] => {
  if (!root) {
    return [];
  }

  return [root?.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
};
