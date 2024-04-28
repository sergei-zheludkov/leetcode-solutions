import { BinaryTreeNode } from '../models/binary-tree-node';
import { postorderTraversal } from './binary-tree-postorder-traversal';

const test1_tree = new BinaryTreeNode();
const test2_tree = new BinaryTreeNode(1);
const test3_tree = new BinaryTreeNode(3, new BinaryTreeNode(1));
const test4_tree = new BinaryTreeNode(0, new BinaryTreeNode(-3, new BinaryTreeNode(-10), null), new BinaryTreeNode(9, new BinaryTreeNode(5), null));
const test5_tree = new BinaryTreeNode(1, new BinaryTreeNode(-3, new BinaryTreeNode(-10), new BinaryTreeNode(0)), new BinaryTreeNode(9, new BinaryTreeNode(5)));
const test6_tree = new BinaryTreeNode(1, null, new BinaryTreeNode(2, new BinaryTreeNode(3, new BinaryTreeNode(5, new BinaryTreeNode(9)), new BinaryTreeNode(6)), new BinaryTreeNode(4, new BinaryTreeNode(7), new BinaryTreeNode(8))));
const test7_tree = new BinaryTreeNode(1, null, new BinaryTreeNode(2, new BinaryTreeNode(3, new BinaryTreeNode(4, new BinaryTreeNode(6), new BinaryTreeNode(7)), new BinaryTreeNode(5, new BinaryTreeNode(8), new BinaryTreeNode(9))), null));

test('binary tree postorder traversal', () => {
  expect(postorderTraversal(null)).toEqual([]);
  expect(postorderTraversal(test1_tree)).toEqual([0]);
  expect(postorderTraversal(test2_tree)).toEqual([1]);
  expect(postorderTraversal(test3_tree)).toEqual([1,3]);
  expect(postorderTraversal(test4_tree)).toEqual([-10,-3,5,9,0]);
  expect(postorderTraversal(test5_tree)).toEqual([-10,0,-3,5,9,1]);
  expect(postorderTraversal(test6_tree)).toEqual([9,5,6,3,7,8,4,2,1]);
  expect(postorderTraversal(test7_tree)).toEqual([6,7,4,8,9,5,3,2,1]);
});
