import { BinaryTreeNode } from '../models/binary-tree-node';

export const findBottomLeftValue = (root: BinaryTreeNode | null): number => {
  if (!root) {
    return 0;
  }

  let maxLvl = 0;
  let val = root.val;

  const dfs = (tree: BinaryTreeNode | null, level: number): void => {
    if (!tree) {
      return;
    }

    if (maxLvl < level) {
      maxLvl = level;
      val = tree.val;
    }

    dfs(tree.left, level + 1);
    dfs(tree.right, level + 1);
  };

  dfs(root, maxLvl);

  return val;
};

// export const findBottomLeftValue = (root: TreeNode | null): number => {
//   const collection = new Map<number, number[]>();
//
//   const dfs = (tree: TreeNode | null, level: number = 0): void => {
//     if (!tree) {
//       return;
//     }
//
//     const item = collection.get(level);
//     collection.set(level, item ? [...item, tree.val] : [tree.val]);
//
//     dfs(tree.left, level + 1);
//     dfs(tree.right, level + 1);
//   };
//
//   dfs(root);
//
//   const [, [val]] = Array.from(collection.entries())[collection.size - 1];
//
//   return val;
// };