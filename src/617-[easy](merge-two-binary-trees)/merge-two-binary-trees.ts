import { BinaryTreeNode } from '../models/binary-tree-node';

export const mergeTrees = (root1: BinaryTreeNode | null, root2: BinaryTreeNode | null): BinaryTreeNode | null => {
  if (!root1) {
    return root2;
  }

  if (!root2) {
    return root1;
  }

  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);

  return root1;

  // FP option
  // return new TreeNode(
  //   root1.val + root2.val,
  //   mergeTrees(root1.left, root2.left),
  //   mergeTrees(root1.right, root2.right),
  // );
};
