import { BinaryTreeNode } from '../models/binary-tree-node';

export const removeLeafNodes = (root: BinaryTreeNode | null, target: number): BinaryTreeNode | null => {
  const nodes: BinaryTreeNode[][] = [];

  (function dfs(head: BinaryTreeNode | null, lvl = 0) {
    if (!head) {
      return;
    }

    if (nodes[lvl]) {
      nodes[lvl].push(head);
    } else {
      nodes[lvl] = [head];
    }

    dfs(head.left, lvl + 1);
    dfs(head.right, lvl + 1);
  })(root);

  nodes.reverse();

  for (const lvl of nodes) {
    for (const node of lvl) {
      if (node.left?.val === 0) {
        node.left = null;
      }

      if (node.right?.val === 0) {
        node.right = null;
      }

      if (!node.left && !node.right && node.val === target) {
        node.val = 0;
      }
    }
  }

  return root?.val ? root : null;
};
