import { BinaryTreeNode } from '../models/binary-tree-node';

export const constructMaximumBinaryTree = (nums: number[]): BinaryTreeNode | null => {
  if (!nums.length) {
    return null;
  }

  const max = Math.max(...nums);
  const maxIndex = nums.findIndex((num) => num === max);

  return new BinaryTreeNode(
    max,
    constructMaximumBinaryTree(nums.slice(0, maxIndex)),
    constructMaximumBinaryTree(nums.slice(maxIndex + 1)),
  );
};
