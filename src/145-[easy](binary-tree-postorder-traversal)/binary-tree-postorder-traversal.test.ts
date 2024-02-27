import { TreeNode } from '../models/tree-node';
import { postorderTraversal } from './binary-tree-postorder-traversal';

const test1_tree = new TreeNode();
const test2_tree = new TreeNode(1);
const test3_tree = new TreeNode(3, new TreeNode(1));
const test4_tree = new TreeNode(0, new TreeNode(-3, new TreeNode(-10), null), new TreeNode(9, new TreeNode(5), null));
const test5_tree = new TreeNode(1, new TreeNode(-3, new TreeNode(-10), new TreeNode(0)), new TreeNode(9, new TreeNode(5)));
const test6_tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, new TreeNode(5, new TreeNode(9)), new TreeNode(6)), new TreeNode(4, new TreeNode(7), new TreeNode(8))));
const test7_tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, new TreeNode(4, new TreeNode(6), new TreeNode(7)), new TreeNode(5, new TreeNode(8), new TreeNode(9))), null));

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
