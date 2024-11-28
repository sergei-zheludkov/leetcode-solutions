import { BinaryTreeNode } from '../models/binary-tree-node';

export const goodNodes = (root: BinaryTreeNode | null, max = -Infinity): number => {
  if (!root) {
    return 0;
  }

  const newMax = Math.max(root.val, max);

  return (root.val >= newMax ? 1 : 0) + goodNodes(root.left, newMax) + goodNodes(root.right, newMax);
};
