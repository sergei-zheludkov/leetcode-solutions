import { BinaryTreeNode } from '../models/binary-tree-node';

export const pathSum = (root: BinaryTreeNode | null, targetSum: number): number[][] => {
  const result: number[][] = []; 
  
  const dfs = (head: BinaryTreeNode | null, currentSum = targetSum, path: number[] = []) => {
    if (!head) {
      return;
    }

    currentSum -= head.val;
    path = [...path, head.val];

    if (!head.left && !head.right && !currentSum) {
      result.push(path);
      return;
    }

    dfs(head.left, currentSum, path);
    dfs(head.right, currentSum, path);
  };
  
  dfs(root);

  return result;
};

// const pathSum = (root: TreeNode | null, targetSum: number): number[][] => {
//   const result: number[][] = [];
//
//   const dfs = (head: TreeNode | null, currentSum = targetSum, path: string = '') => {
//     if (!head) {
//       return;
//     }
//
//     currentSum -= head.val;
//     path = `${path}|${head.val}`;
//
//     if (!head.left && !head.right && !currentSum) {
//       result.push(path.split('|').slice(1).map(Number));
//       return;
//     }
//
//     dfs(head.left, currentSum, path);
//     dfs(head.right, currentSum, path);
//   };
//
//   dfs(root);
//
//   return result;
// };