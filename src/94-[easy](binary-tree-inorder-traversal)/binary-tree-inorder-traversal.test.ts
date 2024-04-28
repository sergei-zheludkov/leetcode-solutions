import { BinaryTreeNode } from '../models/binary-tree-node';
import { inorderTraversal } from './binary-tree-inorder-traversal';

const test1_tree = new BinaryTreeNode();
const test2_tree = new BinaryTreeNode(1, null, new BinaryTreeNode(2, new BinaryTreeNode(3)));
const test3_tree = new BinaryTreeNode(1, null, new BinaryTreeNode(2, new BinaryTreeNode(3, null, new BinaryTreeNode(5, new BinaryTreeNode(8))), new BinaryTreeNode(4, new BinaryTreeNode(6, new BinaryTreeNode(9), new BinaryTreeNode(10)), new BinaryTreeNode(7, null, new BinaryTreeNode(11)))));
const test4_tree = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4, new BinaryTreeNode(8), new BinaryTreeNode(9)), new BinaryTreeNode(5, new BinaryTreeNode(10), new BinaryTreeNode(11))), new BinaryTreeNode(3, new BinaryTreeNode(6), new BinaryTreeNode(7)));

test('binary tree inorder traversal', () => {
  expect(inorderTraversal(null)).toEqual([]);
  expect(inorderTraversal(test1_tree)).toEqual([0]);
  expect(inorderTraversal(test2_tree)).toEqual([1,3,2]);
  expect(inorderTraversal(test3_tree)).toEqual([1,3,8,5,2,9,6,10,4,7,11]);
  expect(inorderTraversal(test4_tree)).toEqual([8,4,9,2,10,5,11,1,6,3,7]);
});

