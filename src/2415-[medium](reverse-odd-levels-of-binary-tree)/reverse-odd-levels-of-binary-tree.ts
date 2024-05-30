import { BinaryTreeNode } from '../models/binary-tree-node';

export const reverseOddLevels = (root: BinaryTreeNode | null): BinaryTreeNode | null => {
  if (!root) {
    return root;
  }

  (function dfs(left: BinaryTreeNode | null, right: BinaryTreeNode | null, lvl = 1){
    if (!left || !right) {
      return;
    }

    if (lvl % 2 !== 0) {
      const tmp = left.val;
      left.val = right.val;
      right.val = tmp;
    }

    lvl++;

    dfs(left.left, right.right, lvl);
    dfs(left.right, right.left, lvl);
  })(root?.left, root?.right);

  return root;
};

// export const reverseOddLevels = (root: BinaryTreeNode | null): BinaryTreeNode | null => {
//   const even: BinaryTreeNode[][] = [];
//
//   (function dfs(head: BinaryTreeNode | null, lvl = 0){
//     if (!head) {
//       return;
//     }
//
//     if (lvl % 2 !== 0) {
//       if (even[lvl]) {
//         even[lvl].push(head);
//       } else {
//         even[lvl] = [head];
//       }
//     }
//
//     lvl++;
//
//     dfs(head.left, lvl);
//     dfs(head.right, lvl);
//   })(root);
//
//   even.forEach((lvl) => {
//     if (!lvl.length) {
//       return;
//     }
//
//     for (let i = 0; i < (lvl.length / 2); i++) {
//       const tmp = lvl[i].val;
//       lvl[i].val = lvl[lvl.length - 1 - i].val;
//       lvl[lvl.length - 1 - i].val = tmp;
//     }
//   });
//
//   return root;
// };
