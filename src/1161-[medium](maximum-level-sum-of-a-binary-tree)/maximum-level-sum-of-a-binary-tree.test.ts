import { TreeNode } from '../models/tree-node';
import { maxLevelSum } from './maximum-level-sum-of-a-binary-tree';

const tree1 = new TreeNode(1, new TreeNode(7, new TreeNode(7), new TreeNode(-8)), new TreeNode(0));
const tree2 = new TreeNode(989, null, new TreeNode(10250, new TreeNode(98693), new TreeNode(-89388, null, new TreeNode(-32127))));
const tree3 = new TreeNode(9, new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(1)), new TreeNode(2, new TreeNode(1), new TreeNode(1))), new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(1)), new TreeNode(2, new TreeNode(1), new TreeNode(1))));

test.each([
  { tree: tree1, expected: 2 },
  { tree: tree2, expected: 2 },
  { tree: tree3, expected: 1 },
])('maximum level sum of a binary tree', ({ tree, expected }) => {
  expect(maxLevelSum(tree)).toBe(expected);
});