import { TreeNode } from '../models/tree-node';

const getBranchValues = (branch: TreeNode | null, direction: 'left' | 'right'): string => {
  if (!branch) {
    return 'null';
  }

  if (direction === 'left') {
    return `${branch?.val}${getBranchValues(branch.left, direction)}${getBranchValues(branch.right, direction)}`;
  }

  if (direction === 'right') {
    return `${branch?.val}${getBranchValues(branch.right, direction)}${getBranchValues(branch.left, direction)}`;
  }

  return 'error';
};

export const isSymmetric = (root: TreeNode | null): boolean => {
  if (!root) {
    return true;
  }

  return getBranchValues(root?.left, 'left') === getBranchValues(root?.right, 'right');
};
