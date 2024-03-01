import { TreeNode } from '../models/tree-node';
import { diameterOfBinaryTree } from './diameter-of-binary-tree';

const test1_tree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
const test3_tree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));
const test4_tree = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(8), new TreeNode(9)), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));
const test5_tree = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(8), new TreeNode(9)), new TreeNode(5, new TreeNode(10), new TreeNode(11))), new TreeNode(3, new TreeNode(6), new TreeNode(7)));
const test6_tree = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(5, new TreeNode(6), new TreeNode(7)))), new TreeNode(3));
const test7_tree = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(6))), new TreeNode(3, new TreeNode(5, new TreeNode(7))));
const test8_tree = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(8), new TreeNode(9)), new TreeNode(5, new TreeNode(10))), new TreeNode(3, new TreeNode(6, new TreeNode(11)), new TreeNode(7)));
const test9_tree = new TreeNode(1);
const test10_tree = new TreeNode(1, new TreeNode(2));

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