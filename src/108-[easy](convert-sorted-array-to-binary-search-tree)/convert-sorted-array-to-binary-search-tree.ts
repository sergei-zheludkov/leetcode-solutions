import { TreeNode } from '../models/tree-node';

export const sortedArrayToBST = (nums: number[]): TreeNode | null => {
  if (!nums.length) {
    return null;
  }

  const middleIndex = Math.floor(nums.length / 2);
  const left = nums.slice(0, middleIndex);
  const right = nums.slice(middleIndex + 1);

  return new TreeNode(nums[middleIndex], sortedArrayToBST(left), sortedArrayToBST(right));
};
