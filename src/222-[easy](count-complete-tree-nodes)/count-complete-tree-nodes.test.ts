import { countNodes } from './count-complete-tree-nodes';
import { BinaryTreeNode } from '../models/binary-tree-node';

const tree1 = null;
const tree2 = new BinaryTreeNode(1);
const tree3 = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4), new BinaryTreeNode(5)), new BinaryTreeNode(3, new BinaryTreeNode(6)));
const tree4 =  new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4, new BinaryTreeNode(8)), new BinaryTreeNode(5)), new BinaryTreeNode(3, new BinaryTreeNode(6), new BinaryTreeNode(7)));
const tree5 = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4, new BinaryTreeNode(8), new BinaryTreeNode(9)), new BinaryTreeNode(5, new BinaryTreeNode(10))), new BinaryTreeNode(3, new BinaryTreeNode(6), new BinaryTreeNode(7)));


test.each([
  { tree: tree1, expected: 0 },
  { tree: tree2, expected: 1 },
  { tree: tree3, expected: 6 },
  { tree: tree4, expected: 8 },
  { tree: tree5, expected: 10 },
])('count complete tree nodes', ({ tree, expected }) => {
  expect(countNodes(tree)).toBe(expected);
});
