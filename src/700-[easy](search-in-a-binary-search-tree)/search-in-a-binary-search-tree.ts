import { BinaryTreeNode } from '../models/binary-tree-node';

export const searchBST = (root: BinaryTreeNode | null, val: number): BinaryTreeNode | null => {
  if (!root) {
    return null;
  }

  if (root.val === val) {
    return root;
  }

  return searchBST(root.left, val) || searchBST(root.right, val);
};