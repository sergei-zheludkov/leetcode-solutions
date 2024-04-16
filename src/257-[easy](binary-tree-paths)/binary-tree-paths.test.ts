import { TreeNode } from '../models/tree-node';
import { binaryTreePaths } from './binary-tree-paths';

const tree1 = new TreeNode(1);
const tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(5)), new TreeNode(3));
const tree3 = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(8), new TreeNode(9)), new TreeNode(5, new TreeNode(10), new TreeNode(11))), new TreeNode(3, new TreeNode(6, new TreeNode(12), new TreeNode(13)), new TreeNode(7, null, new TreeNode(14))));
const tree4 = new TreeNode(1, new TreeNode(2, new TreeNode(4, null, new TreeNode(9, new TreeNode(12), new TreeNode(13)))), new TreeNode(3, new TreeNode(6, new TreeNode(10, null, new TreeNode(14)), new TreeNode(11))));

test.each([
  { tree: tree1, expected: ['1'] },
  { tree: tree2, expected: ['1->2->5','1->3'] },
  { tree: tree3, expected: ['1->2->4->8','1->2->4->9','1->2->5->10','1->2->5->11','1->3->6->12','1->3->6->13','1->3->7->14'] },
  { tree: tree4, expected: ['1->2->4->9->12','1->2->4->9->13','1->3->6->10->14','1->3->6->11'] },
])('binary tree paths', ({ tree, expected }) => {
  expect(binaryTreePaths(tree)).toEqual(expected);
});
