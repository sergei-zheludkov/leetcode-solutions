import { BinaryTreeNode } from '../models/binary-tree-node';

export const sortedArrayToBST = (nums: number[]): BinaryTreeNode | null => {
  if (!nums.length) {
    return null;
  }

  const middleIndex = Math.floor(nums.length / 2);
  const left = nums.slice(0, middleIndex);
  const right = nums.slice(middleIndex + 1);

  return new BinaryTreeNode(nums[middleIndex], sortedArrayToBST(left), sortedArrayToBST(right));
};
