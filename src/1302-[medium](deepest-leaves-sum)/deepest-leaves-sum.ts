import { TreeNode } from '../models/tree-node';

export const deepestLeavesSum = (root: TreeNode | null): number => {
  const nums: number[][] = [];

  const dfs = (head: TreeNode | null, lvl = 0) => {
    if (!head) {
      return;
    }

    if (nums[lvl]) {
      nums[lvl].push(head.val);
    } else {
      nums[lvl] = [head.val];
    }

    dfs(head.left, lvl + 1);
    dfs(head.right, lvl + 1);
  };

  dfs(root);

  return nums.pop()!.reduce((acc, num) => acc + num, 0);
};
