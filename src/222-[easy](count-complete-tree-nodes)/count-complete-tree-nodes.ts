import { TreeNode } from '../models/tree-node';

export const countNodes = (root: TreeNode | null): number => {
  if (!root) {
    return 0;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
};
