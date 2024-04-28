import { BinaryTreeNode } from '../models/binary-tree-node';
import { preorderTraversal } from './binary-tree-preorder-traversal';

const test1_tree = new BinaryTreeNode();
const test2_tree = new BinaryTreeNode(1);
const test3_tree = new BinaryTreeNode(3, new BinaryTreeNode(1));
const test4_tree = new BinaryTreeNode(0, new BinaryTreeNode(-3, new BinaryTreeNode(-10), null), new BinaryTreeNode(9, new BinaryTreeNode(5), null));
const test5_tree = new BinaryTreeNode(1, new BinaryTreeNode(-3, new BinaryTreeNode(-10), new BinaryTreeNode(0)), new BinaryTreeNode(9, new BinaryTreeNode(5)));
const test6_tree = new BinaryTreeNode(1, null, new BinaryTreeNode(2, new BinaryTreeNode(3, new BinaryTreeNode(4, new BinaryTreeNode(6), new BinaryTreeNode(7)), new BinaryTreeNode(5, new BinaryTreeNode(8), new BinaryTreeNode(9))), null));

test('binary tree preorder traversal', () => {
  expect(preorderTraversal(null)).toEqual([]);
  expect(preorderTraversal(test1_tree)).toEqual([0]);
  expect(preorderTraversal(test2_tree)).toEqual([1]);
  expect(preorderTraversal(test3_tree)).toEqual([3,1]);
  expect(preorderTraversal(test4_tree)).toEqual([0,-3,-10,9,5]);
  expect(preorderTraversal(test5_tree)).toEqual([1,-3,-10,0,9,5]);
  expect(preorderTraversal(test6_tree)).toEqual([1,2,3,4,6,7,5,8,9]);
});
