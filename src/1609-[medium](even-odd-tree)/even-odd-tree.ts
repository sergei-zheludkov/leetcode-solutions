import { BinaryTreeNode } from '../models/binary-tree-node';

export const isEvenOddTree = (root: BinaryTreeNode | null): boolean => {
  if (!root) {
    return false;
  }

  let level = 0;
  const queue = [root];

  while (queue.length) {
    const size = queue.length;

    let prev = level % 2 === 0 ? 0 : Infinity;

    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      const val = node.val;

      if (level % 2 === 0) {
        if (val % 2 === 0 || val <= prev) return false;
      } else {
        if (val % 2 !== 0 || val >= prev) return false;
      }

      prev = val;

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    level++;
  }

  return true;
};

// PREVIOUS SOLUTION

// const isValidEvenLine = (line: number[]): boolean => {
//   for (let index = 0; index < line.length; index++) {
//     const current = line[index];
//     const next = line[index + 1];
//
//     const isOdd = !!(current % 2);
//     const isNextFit = next === undefined || current < next;
//
//     if (!isOdd || !isNextFit) {
//       return false;
//     }
//   }
//
//   return true;
// };
//
// const isValidOddLine = (line: number[]): boolean => {
//   for (let index = 0; index < line.length; index++) {
//     const current = line[index];
//     const next = line[index + 1];
//
//     const isEven = !(current % 2);
//     const isNextFit = next === undefined || current > next;
//
//     if (!isEven || !isNextFit) {
//       return false;
//     }
//   }
//
//   return true;
// };
//
// export const isEvenOddTree = (root: TreeNode | null): boolean => {
//   const lines: number[][] = [];
//
//   const dfs = (tree: TreeNode | null, lvl = 0) => {
//     if (!tree) {
//       return;
//     }
//
//     if (lines[lvl]) {
//       lines[lvl].push(tree.val);
//     } else {
//       lines[lvl] = [tree.val];
//     }
//
//     dfs(tree.left, lvl + 1);
//     dfs(tree.right, lvl + 1);
//   };
//
//   dfs(root);
//
//   return !lines.some((line, index ) => !(
//     index % 2
//       ? isValidOddLine(line)
//       : isValidEvenLine(line)
//   ));
// };
