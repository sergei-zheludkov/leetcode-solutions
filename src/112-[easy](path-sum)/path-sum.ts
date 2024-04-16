import { TreeNode } from '../models/tree-node';

export const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
  if (!root) {
    return false;
  }

  targetSum -= root.val;
    
  if (!root.left && !root.right && !targetSum) {
    return true;
  }
    
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

// export const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
//   const dfs = (head: TreeNode | null, currentSum = 0): boolean => {
//     if (!head) {
//       return false;
//     }
//
//     if (!head.left && !head.right && currentSum + head.val === targetSum) {
//       return true;
//     }
//
//     return dfs(head.left, currentSum + head.val) || dfs(head.right, currentSum + head.val);
//   };
//
//   return dfs(root);
// };