import { TreeNode } from '../models/tree-node';

export const preorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) {
    return [];
  }

  return [root?.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
};
