import { BinaryTreeNode } from '../models/binary-tree-node';

export const levelOrderBottom = (root: BinaryTreeNode | null): number[][] => {
  const result: number[][] = [];

  (function dfs(head: BinaryTreeNode | null, lvl = 0) {
    if (!head) {
      return;
    }

    if (!result[lvl]) {
      result[lvl] = [];
    }

    result[lvl].push(head.val);

    lvl++;

    dfs(head.left, lvl);
    dfs(head.right, lvl);
  })(root);

  return result.reverse();
};
