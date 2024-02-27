import { TreeNode } from '../models/tree-node';

export const diameterOfBinaryTree = (root: TreeNode | null): number => {
  let max = 0;

  const maxDepth = (node: TreeNode | null): number => {
    if (!node) {
      return 0;
    }

    const leftMax = maxDepth(node.left);
    const rightMax = maxDepth(node.right);

    max = Math.max(max, leftMax + rightMax);

    return 1 + Math.max(leftMax, rightMax);
  };

  maxDepth(root);

  return max;
};
