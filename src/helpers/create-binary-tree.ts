import { TreeNode } from '../models/tree-node';

export const createBinaryTree = (nodes: Array<number | null>, i = 0): TreeNode | null => {
  if (!nodes.length) {
    return null;
  }

  const parent = nodes[i];
  const left = nodes[i * 2 + 1] ? createBinaryTree(nodes, i * 2 + 1) : null;
  const right = nodes[i * 2 + 2] ? createBinaryTree(nodes, i * 2 + 2) : null;

  return new TreeNode(parent, left, right);
};
