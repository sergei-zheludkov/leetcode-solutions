import { BinaryTreeNode } from '../models/binary-tree-node';
import { mergeTrees } from './merge-two-binary-trees';

const test1_tree1 = new BinaryTreeNode(1);
const test1_tree2 = new BinaryTreeNode(1);
const test1_expected = new BinaryTreeNode(2);

const test2_tree1 = new BinaryTreeNode(1);
const test2_tree2 = new BinaryTreeNode(1, new BinaryTreeNode(2));
const test2_expected = new BinaryTreeNode(2, new BinaryTreeNode(2));

const test3_tree1 = new BinaryTreeNode(1, new BinaryTreeNode(3, new BinaryTreeNode(5)), new BinaryTreeNode(2));
const test3_tree2 = new BinaryTreeNode(2, new BinaryTreeNode(1, null, new BinaryTreeNode(4)), new BinaryTreeNode(3, null, new BinaryTreeNode(7)));
const test3_expected = new BinaryTreeNode(3, new BinaryTreeNode(4, new BinaryTreeNode(5), new BinaryTreeNode(4)), new BinaryTreeNode(5, null, new BinaryTreeNode(7)));

test.each([
  { tree1: null, tree2: null, expected: null },
  { tree1: test1_tree1, tree2: test1_tree2, expected: test1_expected },
  { tree1: test2_tree1, tree2: test2_tree2, expected: test2_expected },
  { tree1: test3_tree1, tree2: test3_tree2, expected: test3_expected },
])('merge two binary trees', ({ tree1, tree2, expected }) => {
  expect(mergeTrees(tree1, tree2)).toEqual(expected);
});
