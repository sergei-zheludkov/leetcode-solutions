import { TreeNode } from '../models/tree-node';

export const postorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) {
    return [];
  }

  return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root?.val];
};
