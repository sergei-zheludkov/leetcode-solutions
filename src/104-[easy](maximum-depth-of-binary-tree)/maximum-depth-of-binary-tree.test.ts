import { TreeNode } from '../models/tree-node';
import { maxDepth } from './maximum-depth-of-binary-tree';

const test1_tree = new TreeNode();
const test2_tree = new TreeNode(1);
const test3_tree = new TreeNode(1, null, new TreeNode(2));
const test4_tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const test5_tree = new TreeNode(1, new TreeNode(2, null, new TreeNode(3 )),  new TreeNode(2, null, new TreeNode(3 )));
const test6_tree = new TreeNode(0, new TreeNode(0, null, new TreeNode(0 )),  new TreeNode(0, null, new TreeNode(0 )));
const test7_tree = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(5)), new TreeNode(4)),  new TreeNode(2, new TreeNode(4), new TreeNode(3)));

test.each([
  { tree: test1_tree, expected: 1 },
  { tree: test2_tree, expected: 1 },
  { tree: test3_tree, expected: 2 },
  { tree: test4_tree, expected: 3 },
  { tree: test5_tree, expected: 3 },
  { tree: test6_tree, expected: 3 },
  { tree: test7_tree, expected: 4 },
])('maximum depth of binary tree', ({ tree, expected }) => {
  expect(maxDepth(tree)).toBe(expected);
});
