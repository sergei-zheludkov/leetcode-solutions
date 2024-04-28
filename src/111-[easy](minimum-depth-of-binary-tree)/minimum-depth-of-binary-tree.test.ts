import { BinaryTreeNode } from '../models/binary-tree-node';
import { minDepth } from './minimum-depth-of-binary-tree';

const test1_tree = new BinaryTreeNode();
const test2_tree = new BinaryTreeNode(1);
const test3_tree = new BinaryTreeNode(3, new BinaryTreeNode(9), new BinaryTreeNode(20));
const test4_tree = new BinaryTreeNode(3, new BinaryTreeNode(9), new BinaryTreeNode(20, new BinaryTreeNode(15), new BinaryTreeNode(7)));
const test5_tree = new BinaryTreeNode(2, null, new BinaryTreeNode(3, null, new BinaryTreeNode(4, null, new BinaryTreeNode(5, null, new BinaryTreeNode(6)))));

test('minimum depth of binary tree', () => {
  expect(minDepth(null)).toBe(0);
  expect(minDepth(test1_tree)).toBe(1);
  expect(minDepth(test2_tree)).toBe(1);
  expect(minDepth(test3_tree)).toBe(2);
  expect(minDepth(test4_tree)).toBe(2);
  expect(minDepth(test5_tree)).toBe(5);
});
