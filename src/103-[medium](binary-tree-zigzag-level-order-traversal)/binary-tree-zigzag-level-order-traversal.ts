import { TreeNode } from '../models/tree-node';

const isEven = (n: number) => n % 2 === 0;
const isOdd = (n: number) => n % 2 === 1;

export const zigzagLevelOrder = (root: TreeNode | null): number[][] => {
  const result: number[][] = [];

  (function dfs (head: TreeNode | null, level = 0) {
    if (!head) {
      return;
    }

    if (!result[level]) {
      result[level] = [];
    }

    if (isEven(level)) {
      result[level].push(head.val);
    }

    if (isOdd(level)) {
      result[level].unshift(head.val);
    }

    level++;

    dfs(head.left, level);
    dfs(head.right, level);
  })(root);

  return result;
};