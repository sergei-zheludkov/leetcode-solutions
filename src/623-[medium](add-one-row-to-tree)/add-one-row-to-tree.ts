import { BinaryTreeNode } from '../models/binary-tree-node';

export const addOneRow = (
  root: BinaryTreeNode | null,
  val: number,
  depth: number,
): BinaryTreeNode | null => {
  if (depth === 1) {
    return new BinaryTreeNode(val, root);
  }

  const dfs = (head: BinaryTreeNode | null, lvl = 2) => {
    if (!head) {
      return;
    }

    if (depth === lvl) {
      head.left = new BinaryTreeNode(val, head.left);
      head.right = new BinaryTreeNode(val, null, head.right);
      return;
    }

    dfs(head.left, lvl + 1);
    dfs(head.right, lvl + 1);
  };

  dfs(root);

  return root;
};