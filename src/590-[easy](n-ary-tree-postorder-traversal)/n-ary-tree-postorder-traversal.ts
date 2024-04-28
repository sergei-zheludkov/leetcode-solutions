import { TreeNode } from '../models/tree-node';

export const postorder = (root: TreeNode | null): number[] => {
  const result: number[] = [];

  (function dfs(head: TreeNode | null){
    if (!head) {
      return;
    }

    result.unshift(head.val);

    head.children.reverse().forEach(dfs);
  })(root);

  return result;
};

// export const postorder = (root: TreeNode | null): number[] => {
//   if (!root) {
//     return [];
//   }
//
//   return [...root.children.map(postorder).flat(), root.val];
// };