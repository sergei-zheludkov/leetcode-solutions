import { TreeNode } from '../models/tree-node';

export const addOneRow = (
  root: TreeNode | null,
  val: number,
  depth: number,
): TreeNode | null => {
  if (depth === 1) {
    return new TreeNode(val, root);
  }

  const dfs = (head: TreeNode | null, lvl = 2) => {
    if (!head) {
      return;
    }

    if (depth === lvl) {
      head.left = new TreeNode(val, head.left);
      head.right = new TreeNode(val, null, head.right);
      return;
    }

    dfs(head.left, lvl + 1);
    dfs(head.right, lvl + 1);
  };

  dfs(root);

  return root;
};