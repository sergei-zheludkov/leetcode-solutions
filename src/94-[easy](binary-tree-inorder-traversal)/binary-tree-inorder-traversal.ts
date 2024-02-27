import { TreeNode } from '../models/tree-node';

export const inorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) {
    return [];
  }

  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};
