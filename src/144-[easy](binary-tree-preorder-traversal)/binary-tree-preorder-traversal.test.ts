import { TreeNode } from '../models/tree-node';
import { preorderTraversal } from './binary-tree-preorder-traversal';

const test1_tree = new TreeNode();
const test2_tree = new TreeNode(1);
const test3_tree = new TreeNode(3, new TreeNode(1));
const test4_tree = new TreeNode(0, new TreeNode(-3, new TreeNode(-10), null), new TreeNode(9, new TreeNode(5), null));
const test5_tree = new TreeNode(1, new TreeNode(-3, new TreeNode(-10), new TreeNode(0)), new TreeNode(9, new TreeNode(5)));
const test6_tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, new TreeNode(4, new TreeNode(6), new TreeNode(7)), new TreeNode(5, new TreeNode(8), new TreeNode(9))), null));

test('binary tree preorder traversal', () => {
  expect(preorderTraversal(null)).toEqual([]);
  expect(preorderTraversal(test1_tree)).toEqual([0]);
  expect(preorderTraversal(test2_tree)).toEqual([1]);
  expect(preorderTraversal(test3_tree)).toEqual([3,1]);
  expect(preorderTraversal(test4_tree)).toEqual([0,-3,-10,9,5]);
  expect(preorderTraversal(test5_tree)).toEqual([1,-3,-10,0,9,5]);
  expect(preorderTraversal(test6_tree)).toEqual([1,2,3,4,6,7,5,8,9]);
});
