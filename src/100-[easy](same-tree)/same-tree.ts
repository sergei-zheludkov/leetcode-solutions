import { BinaryTreeNode } from '../models/binary-tree-node';

export const isSameTree = (tree1: BinaryTreeNode | null, tree2: BinaryTreeNode | null): boolean => {
  if (tree1 === null && tree2 === null) {
    return true;
  }

  if (tree1 === null || tree2 === null) {
    return false;
  }

  if (tree1?.val !== tree2?.val) {
    return false;
  }

  return isSameTree(tree1?.left, tree2?.left) && isSameTree(tree1?.right, tree2?.right);
};
