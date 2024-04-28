import { TreeNode } from '../models/tree-node';

export const preorder = (root: TreeNode | null): number[] => {
  const result: number[] = [];

  (function dfs(head: TreeNode | null){
    if (!head) {
      return;
    }

    result.push(head.val);

    head.children.forEach(dfs);
  })(root);

  return result;
};

// export const preorder = (root: TreeNode | null): number[] => {
//   if (!root) {
//     return [];
//   }
//
//   return [root.val, ...root.children.map(preorder).flat()];
// };