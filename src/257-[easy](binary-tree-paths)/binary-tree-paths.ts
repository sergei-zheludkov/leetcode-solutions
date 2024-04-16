import { TreeNode } from '../models/tree-node';

export const binaryTreePaths = (root: TreeNode | null): string[] => {
  const paths: string[] = [];

  const dfs = (head: TreeNode | null, path = '') => {
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