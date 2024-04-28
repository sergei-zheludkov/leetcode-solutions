import { BinaryTreeNode } from '../models/binary-tree-node';
import { binaryTreePaths } from './binary-tree-paths';

const tree1 = new BinaryTreeNode(1);
const tree2 = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(5)), new BinaryTreeNode(3));
const tree3 = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4, new BinaryTreeNode(8), new BinaryTreeNode(9)), new BinaryTreeNode(5, new BinaryTreeNode(10), new BinaryTreeNode(11))), new BinaryTreeNode(3, new BinaryTreeNode(6, new BinaryTreeNode(12), new BinaryTreeNode(13)), new BinaryTreeNode(7, null, new BinaryTreeNode(14))));
const tree4 = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4, null, new BinaryTreeNode(9, new BinaryTreeNode(12), new BinaryTreeNode(13)))), new BinaryTreeNode(3, new BinaryTreeNode(6, new BinaryTreeNode(10, null, new BinaryTreeNode(14)), new BinaryTreeNode(11))));

test.each([
  { tree: tree1, expected: ['1'] },
  { tree: tree2, expected: ['1->2->5','1->3'] },
  { tree: tree3, expected: ['1->2->4->8','1->2->4->9','1->2->5->10','1->2->5->11','1->3->6->12','1->3->6->13','1->3->7->14'] },
  { tree: tree4, expected: ['1->2->4->9->12','1->2->4->9->13','1->3->6->10->14','1->3->6->11'] },
])('binary tree paths', ({ tree, expected }) => {
  expect(binaryTreePaths(tree)).toEqual(expected);
});
