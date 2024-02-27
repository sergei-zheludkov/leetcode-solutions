import { TreeNode } from '../models/tree-node';

export const maxDepth = (root: TreeNode | null): number => {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
