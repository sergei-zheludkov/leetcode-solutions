import { BinaryTreeNode } from '../models/binary-tree-node';
import { maxLevelSum } from './maximum-level-sum-of-a-binary-tree';

const tree1 = new BinaryTreeNode(1, new BinaryTreeNode(7, new BinaryTreeNode(7), new BinaryTreeNode(-8)), new BinaryTreeNode(0));
const tree2 = new BinaryTreeNode(989, null, new BinaryTreeNode(10250, new BinaryTreeNode(98693), new BinaryTreeNode(-89388, null, new BinaryTreeNode(-32127))));
const tree3 = new BinaryTreeNode(9, new BinaryTreeNode(4, new BinaryTreeNode(2, new BinaryTreeNode(1), new BinaryTreeNode(1)), new BinaryTreeNode(2, new BinaryTreeNode(1), new BinaryTreeNode(1))), new BinaryTreeNode(4, new BinaryTreeNode(2, new BinaryTreeNode(1), new BinaryTreeNode(1)), new BinaryTreeNode(2, new BinaryTreeNode(1), new BinaryTreeNode(1))));

test.each([
  { tree: tree1, expected: 2 },
  { tree: tree2, expected: 2 },
  { tree: tree3, expected: 1 },
])('maximum level sum of a binary tree', ({ tree, expected }) => {
  expect(maxLevelSum(tree)).toBe(expected);
});