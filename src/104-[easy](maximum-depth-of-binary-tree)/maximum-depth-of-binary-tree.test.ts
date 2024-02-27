import { TreeNode } from '../models/tree-node';
import { maxDepth } from './maximum-depth-of-binary-tree';

const test1_tree = new TreeNode();
const test2_tree = new TreeNode(1);
const test3_tree = new TreeNode(1, null, new TreeNode(2));
const test4_tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const test5_tree = new TreeNode(1, new TreeNode(2, null, new TreeNode(3 )),  new TreeNode(2, null, new TreeNode(3 )));
const test6_tree = new TreeNode(0, new TreeNode(0, null, new TreeNode(0 )),  new TreeNode(0, null, new TreeNode(0 )));
const test7_tree = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(5)), new TreeNode(4)),  new TreeNode(2, new TreeNode(4), new TreeNode(3)));

test('maximum depth of binary tree', () => {
  expect(maxDepth(test1_tree)).toBe(1);
  expect(maxDepth(test2_tree)).toBe(1);
  expect(maxDepth(test3_tree)).toBe(2);
  expect(maxDepth(test4_tree)).toBe(3);
  expect(maxDepth(test5_tree)).toBe(3);
  expect(maxDepth(test6_tree)).toBe(3);
  expect(maxDepth(test7_tree)).toBe(4);
});
