import { BinaryTreeNode } from '../models/binary-tree-node';
import { sumOfLeftLeaves } from './sum-of-left-leaves';

const tree1 = new BinaryTreeNode(3);
const tree2 = new BinaryTreeNode(3, new BinaryTreeNode(9), new BinaryTreeNode(20,  new BinaryTreeNode(15), new BinaryTreeNode(7)));
const tree3 = new BinaryTreeNode(3, new BinaryTreeNode(9, new BinaryTreeNode(11)), new BinaryTreeNode(20,  new BinaryTreeNode(15), new BinaryTreeNode(7)));
const tree4 = new BinaryTreeNode(3, new BinaryTreeNode(9, new BinaryTreeNode(11, new BinaryTreeNode(2), new BinaryTreeNode(40))), new BinaryTreeNode(20,  new BinaryTreeNode(15, new BinaryTreeNode(3)), new BinaryTreeNode(7)));
const tree5 = new BinaryTreeNode(3, new BinaryTreeNode(9, new BinaryTreeNode(11, new BinaryTreeNode(2), new BinaryTreeNode(40, new BinaryTreeNode(1)))), new BinaryTreeNode(20,  new BinaryTreeNode(15, new BinaryTreeNode(3)), new BinaryTreeNode(7)));
const tree6 = new BinaryTreeNode(0, new BinaryTreeNode(2, new BinaryTreeNode(1, new BinaryTreeNode(5), new BinaryTreeNode(1))), new BinaryTreeNode(4, new BinaryTreeNode(3, null ,new BinaryTreeNode(6)), new BinaryTreeNode(-1, null, new BinaryTreeNode(8))));

test.each([
  { tree: tree1, expected: 0 },
  { tree: tree2, expected: 24 },
  { tree: tree3, expected: 26 },
  { tree: tree4, expected: 5 },
  { tree: tree5, expected: 6 },
  { tree: tree6, expected: 5 },
])('sum of left leaves', ({ tree, expected }) => {
  expect(sumOfLeftLeaves(tree)).toBe(expected);
});
