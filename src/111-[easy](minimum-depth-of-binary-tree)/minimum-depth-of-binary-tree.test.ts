import { TreeNode } from '../models/tree-node';
import { minDepth } from './minimum-depth-of-binary-tree';

const test1_tree = new TreeNode();
const test2_tree = new TreeNode(1);
const test3_tree = new TreeNode(3, new TreeNode(9), new TreeNode(20));
const test4_tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const test5_tree = new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))));

test('minimum depth of binary tree', () => {
  expect(minDepth(null)).toBe(0);
  expect(minDepth(test1_tree)).toBe(1);
  expect(minDepth(test2_tree)).toBe(1);
  expect(minDepth(test3_tree)).toBe(2);
  expect(minDepth(test4_tree)).toBe(2);
  expect(minDepth(test5_tree)).toBe(5);
});
