import { BinaryTreeNode } from '../models/binary-tree-node';

const tree1 = new BinaryTreeNode(0);
const expected1 = new BinaryTreeNode();
const tree2 = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(3), new BinaryTreeNode(4)), new BinaryTreeNode(5, null, new BinaryTreeNode(6)));
const expected2 = new BinaryTreeNode();
const tree3 = new BinaryTreeNode(0, new BinaryTreeNode(1, new BinaryTreeNode(3, new BinaryTreeNode(7), new BinaryTreeNode(8)), new BinaryTreeNode(4, new BinaryTreeNode(9), new BinaryTreeNode(10))), new BinaryTreeNode(2, new BinaryTreeNode(5, new BinaryTreeNode(11), new BinaryTreeNode(12)), new BinaryTreeNode(6, new BinaryTreeNode(13), new BinaryTreeNode(14))));
const expected3 = new BinaryTreeNode();

test.each([
  { tree: tree1, expected: expected1 },
  { tree: tree2, expected: expected2 },
  { tree: tree3, expected: expected3 },
])('flatten binary tree to linked list', () => {

});
