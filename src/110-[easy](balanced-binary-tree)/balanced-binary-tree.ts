import { BinaryTreeNode } from '../models/binary-tree-node';
import { maxDepth } from '../104-[easy](maximum-depth-of-binary-tree)/maximum-depth-of-binary-tree';

export const isBalanced = (root: BinaryTreeNode | null): boolean => {
  if (!root) {
    return true;
  }

  return Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1
    ? isBalanced(root.left) && isBalanced(root.right)
    : false;
};
