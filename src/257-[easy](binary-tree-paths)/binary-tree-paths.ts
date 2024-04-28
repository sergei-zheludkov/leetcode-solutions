import { BinaryTreeNode } from '../models/binary-tree-node';

export const binaryTreePaths = (root: BinaryTreeNode | null): string[] => {
  const paths: string[] = [];

  const dfs = (head: BinaryTreeNode | null, path = '') => {
    if (!head) {
      return;
    }

    if (!head.right && !head.left) {
      paths.push(`${path}${head.val}`);
    }

    dfs(head.left, `${path}${head.val}->`);
    dfs(head.right, `${path}${head.val}->`);
  };

  dfs(root);

  return paths;
};