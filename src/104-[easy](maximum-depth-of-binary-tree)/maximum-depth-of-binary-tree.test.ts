import { BinaryTreeNode } from '../models/binary-tree-node';
import { maxDepth } from './maximum-depth-of-binary-tree';

const test1_tree = new BinaryTreeNode();
const test2_tree = new BinaryTreeNode(1);
const test3_tree = new BinaryTreeNode(1, null, new BinaryTreeNode(2));
const test4_tree = new BinaryTreeNode(3, new BinaryTreeNode(9), new BinaryTreeNode(20, new BinaryTreeNode(15), new BinaryTreeNode(7)));
const test5_tree = new BinaryTreeNode(1, new BinaryTreeNode(2, null, new BinaryTreeNode(3 )),  new BinaryTreeNode(2, null, new BinaryTreeNode(3 )));
const test6_tree = new BinaryTreeNode(0, new BinaryTreeNode(0, null, new BinaryTreeNode(0 )),  new BinaryTreeNode(0, null, new BinaryTreeNode(0 )));
const test7_tree = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(3, new BinaryTreeNode(5)), new BinaryTreeNode(4)),  new BinaryTreeNode(2, new BinaryTreeNode(4), new BinaryTreeNode(3)));

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
