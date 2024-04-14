import { TreeNode } from '../models/tree-node';

export const sumOfLeftLeaves = (root: TreeNode | null, isLeft?: boolean): number => {
  if (!root) {
    return 0;
  }

  if (isLeft && !root.left && !root.right) {
    return root.val;
  }

  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right);
};
