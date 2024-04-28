import { BinaryTreeNode } from '../models/binary-tree-node';
import { sortedArrayToBST } from './convert-sorted-array-to-binary-search-tree';

const result1 = new BinaryTreeNode(0, new BinaryTreeNode(-3, new BinaryTreeNode(-10), null), new BinaryTreeNode(9, new BinaryTreeNode(5), null));
const result2 = new BinaryTreeNode(3, new BinaryTreeNode(1));
const result3 = new BinaryTreeNode(1, new BinaryTreeNode(-3, new BinaryTreeNode(-10), new BinaryTreeNode(0)), new BinaryTreeNode(9, new BinaryTreeNode(5)));

test('convert sorted array to binary search tree', () => {
  expect(sortedArrayToBST([-10,-3,0,5,9])).toEqual(result1);
  expect(sortedArrayToBST([1,3])).toEqual(result2);
  expect(sortedArrayToBST([-10,-3,0,1,5,9])).toEqual(result3);
});
