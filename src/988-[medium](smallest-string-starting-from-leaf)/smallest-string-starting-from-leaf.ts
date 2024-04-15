import { TreeNode } from '../models/tree-node';

const getLetter = (num: number) => String.fromCharCode(65 + num);

export const smallestFromLeaf = (root: TreeNode | null): string => {
  let min = '';

  const dfs = (head: TreeNode | null, str = '') => {
    if (head && !head.left && !head.right) {
      const checked = `${getLetter(head.val)}${str}`;

      min = min && min < checked ? min : checked;

      return;
    }

    if (head?.left) {
      dfs(head.left, `${getLetter(head.val)}${str}`);
    }

    if (head?.right) {
      dfs(head.right, `${getLetter(head.val)}${str}`);
    }
  };

  dfs(root);

  return min.toLowerCase();
};
