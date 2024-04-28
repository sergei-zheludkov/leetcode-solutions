import { BinaryTreeNode } from '../models/binary-tree-node';
import { diameterOfBinaryTree } from './diameter-of-binary-tree';

const test1_tree = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4), new BinaryTreeNode(5)), new BinaryTreeNode(3));
const test3_tree = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4), new BinaryTreeNode(5)), new BinaryTreeNode(3, new BinaryTreeNode(6), new BinaryTreeNode(7)));
const test4_tree = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4, new BinaryTreeNode(8), new BinaryTreeNode(9)), new BinaryTreeNode(5)), new BinaryTreeNode(3, new BinaryTreeNode(6), new BinaryTreeNode(7)));
const test5_tree = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4, new BinaryTreeNode(8), new BinaryTreeNode(9)), new BinaryTreeNode(5, new BinaryTreeNode(10), new BinaryTreeNode(11))), new BinaryTreeNode(3, new BinaryTreeNode(6), new BinaryTreeNode(7)));
const test6_tree = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4, new BinaryTreeNode(5, new BinaryTreeNode(6), new BinaryTreeNode(7)))), new BinaryTreeNode(3));
const test7_tree = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4, new BinaryTreeNode(6))), new BinaryTreeNode(3, new BinaryTreeNode(5, new BinaryTreeNode(7))));
const test8_tree = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4, new BinaryTreeNode(8), new BinaryTreeNode(9)), new BinaryTreeNode(5, new BinaryTreeNode(10))), new BinaryTreeNode(3, new BinaryTreeNode(6, new BinaryTreeNode(11)), new BinaryTreeNode(7)));
const test9_tree = new BinaryTreeNode(1);
const test10_tree = new BinaryTreeNode(1, new BinaryTreeNode(2));

describe(('diameter of binary tree'), () => {
  test.each([
    { tree: test1_tree, expected: 3 },
    { tree: test3_tree, expected: 4 },
    { tree: test4_tree, expected: 5 },
    { tree: test5_tree, expected: 5 },
    { tree: test6_tree, expected: 5 },
    { tree: test7_tree, expected: 6 },
    { tree: test8_tree, expected: 6 },

  ])('has width', ({ tree, expected }) => {
    expect(diameterOfBinaryTree(tree)).toBe(expected);
  });

  test.each([
    { tree: test9_tree, expected: 0 },
    { tree: test10_tree, expected: 1 },
  ])('thin cases', ({ tree, expected }) => {
    expect(diameterOfBinaryTree(tree)).toBe(expected);
  });
});