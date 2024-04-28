import { BinaryTreeNode } from '../models/binary-tree-node';
import { searchBST } from './search-in-a-binary-search-tree';

const tree = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4, new BinaryTreeNode(8), new BinaryTreeNode(9)), new BinaryTreeNode(5, new BinaryTreeNode(10), new BinaryTreeNode(11))), new BinaryTreeNode(3, new BinaryTreeNode(6, new BinaryTreeNode(12), new BinaryTreeNode(13)), new BinaryTreeNode(7, new BinaryTreeNode(14), new BinaryTreeNode(15))));

test.each([
  { tree, val: 2, expected: tree.left },
  { tree, val: 4, expected: tree.left?.left },
  { tree, val: 6, expected: tree.right?.left },
  { tree, val: 13, expected: tree.right?.left?.right },
])('search in a binary search tree', ({ tree: head, val, expected }) => {
  expect(searchBST(head, val)).toBe(expected);
});
