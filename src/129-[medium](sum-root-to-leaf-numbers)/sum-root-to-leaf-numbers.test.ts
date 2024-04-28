import { BinaryTreeNode } from '../models/binary-tree-node';
import { sumNumbers } from './sum-root-to-leaf-numbers';

const tree1 = new BinaryTreeNode(1);
const tree2 = new BinaryTreeNode(1, new BinaryTreeNode(0));
const tree3 = new BinaryTreeNode(1, new BinaryTreeNode(2), new BinaryTreeNode(3));
const tree4 = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4)), new BinaryTreeNode(3));
const tree5 = new BinaryTreeNode(4, new BinaryTreeNode(9, new BinaryTreeNode(5), new BinaryTreeNode(1)), new BinaryTreeNode(0));
const tree6 = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4), new BinaryTreeNode(5)), new BinaryTreeNode(3, new BinaryTreeNode(6), new BinaryTreeNode(7)));
const tree7 = new BinaryTreeNode(1, new BinaryTreeNode(5, new BinaryTreeNode(2), new BinaryTreeNode(4)), new BinaryTreeNode(8, new BinaryTreeNode(3), new BinaryTreeNode(7)));

test.each([
  { tree: tree1, expected: 1 },
  { tree: tree2, expected: 10 },
  { tree: tree3, expected: 25 },
  { tree: tree4, expected: 137 },
  { tree: tree5, expected: 1026 },
  { tree: tree6, expected: 522 },
  { tree: tree7, expected: 676 },
])('sum root to leaf numbers', ({ tree, expected }) => {
  expect(sumNumbers(tree)).toBe(expected);
});