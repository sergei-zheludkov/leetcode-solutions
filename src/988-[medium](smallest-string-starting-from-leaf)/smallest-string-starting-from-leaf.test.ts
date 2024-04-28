import { BinaryTreeNode } from '../models/binary-tree-node';
import { smallestFromLeaf } from './smallest-string-starting-from-leaf';

const tree1 = new BinaryTreeNode(0, new BinaryTreeNode(1, new BinaryTreeNode(3), new BinaryTreeNode(4)), new BinaryTreeNode(2, new BinaryTreeNode(3), new BinaryTreeNode(4)));
const tree2 = new BinaryTreeNode(25, new BinaryTreeNode(1, new BinaryTreeNode(1), new BinaryTreeNode(3)), new BinaryTreeNode(3, new BinaryTreeNode(0), new BinaryTreeNode(2)));
const tree3 = new BinaryTreeNode(2, new BinaryTreeNode(2, null, new BinaryTreeNode(1, new BinaryTreeNode(0))), new BinaryTreeNode(1, new BinaryTreeNode(0)));
const tree4 = new BinaryTreeNode(1, new BinaryTreeNode(25), new BinaryTreeNode(1, new BinaryTreeNode(1)));

test.each([
  { tree: tree1, expected: 'dba' },
  { tree: tree2, expected: 'adz' },
  { tree: tree3, expected: 'abc' },
  { tree: tree4, expected: 'bbb' },
])('smallest string starting from leaf', ({ tree, expected }) => {
  expect(smallestFromLeaf(tree)).toBe(expected);
});