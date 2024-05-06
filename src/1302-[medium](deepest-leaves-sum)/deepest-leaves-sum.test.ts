import { BinaryTreeNode } from '../models/binary-tree-node';
import { deepestLeavesSum } from './deepest-leaves-sum';

const tree1 = new BinaryTreeNode(1);
const tree2 = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4, new BinaryTreeNode(7)), new BinaryTreeNode(5)), new BinaryTreeNode(3, new BinaryTreeNode(6, null, new BinaryTreeNode(8))));
const tree3 = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4, new BinaryTreeNode(7)), new BinaryTreeNode(5)), new BinaryTreeNode(3, new BinaryTreeNode(6)));
const tree4 = new BinaryTreeNode(6, new BinaryTreeNode(7, new BinaryTreeNode(2, new BinaryTreeNode(9)), new BinaryTreeNode(7, new BinaryTreeNode(1), new BinaryTreeNode(4))), new BinaryTreeNode(8, new BinaryTreeNode(1), new BinaryTreeNode(3, null, new BinaryTreeNode(5))));
const tree5 = new BinaryTreeNode(6, new BinaryTreeNode(7, new BinaryTreeNode(2, new BinaryTreeNode(9)), new BinaryTreeNode(7, null, new BinaryTreeNode(4))), new BinaryTreeNode(8, new BinaryTreeNode(1), new BinaryTreeNode(3, null, new BinaryTreeNode(5))));

test.each([
  { tree: tree1, expected: 1 },
  { tree: tree2, expected: 15 },
  { tree: tree3, expected: 7 },
  { tree: tree4, expected: 19 },
  { tree: tree5, expected: 18 },
])('deepest leaves sum', ({ tree, expected }) => {
  expect(deepestLeavesSum(tree)).toBe(expected);
});