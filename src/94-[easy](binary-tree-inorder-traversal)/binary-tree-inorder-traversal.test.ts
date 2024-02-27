import { TreeNode } from '../models/tree-node';
import { inorderTraversal } from './binary-tree-inorder-traversal';

const test1_tree = new TreeNode();
const test2_tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
const test3_tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, new TreeNode(5, new TreeNode(8))), new TreeNode(4, new TreeNode(6, new TreeNode(9), new TreeNode(10)), new TreeNode(7, null, new TreeNode(11)))));
const test4_tree = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(8), new TreeNode(9)), new TreeNode(5, new TreeNode(10), new TreeNode(11))), new TreeNode(3, new TreeNode(6), new TreeNode(7)));

test('binary tree inorder traversal', () => {
  expect(inorderTraversal(null)).toEqual([]);
  expect(inorderTraversal(test1_tree)).toEqual([0]);
  expect(inorderTraversal(test2_tree)).toEqual([1,3,2]);
  expect(inorderTraversal(test3_tree)).toEqual([1,3,8,5,2,9,6,10,4,7,11]);
  expect(inorderTraversal(test4_tree)).toEqual([8,4,9,2,10,5,11,1,6,3,7]);
});

