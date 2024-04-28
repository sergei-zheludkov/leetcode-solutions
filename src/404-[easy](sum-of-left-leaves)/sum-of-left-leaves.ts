import { BinaryTreeNode } from '../models/binary-tree-node';

export const sumOfLeftLeaves = (root: BinaryTreeNode | null, isLeft?: boolean): number => {
  if (!root) {
    return 0;
  }

  if (isLeft && !root.left && !root.right) {
    return root.val;
  }

  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right);
};
