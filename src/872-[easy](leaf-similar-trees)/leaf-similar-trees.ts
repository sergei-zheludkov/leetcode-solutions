import { BinaryTreeNode } from '../models/binary-tree-node';

export const leafSimilar = (root1: BinaryTreeNode | null, root2: BinaryTreeNode | null): boolean => {
  const dfs = (head: BinaryTreeNode | null): string => {
    if (!head) {
      return '';
    }

    if (!head?.left && !head?.right) {
      return head.val.toString() + ',';
    }

    return `${dfs(head.left)}${dfs(head.right)}`;
  };

  return dfs(root1) === dfs(root2);
};
