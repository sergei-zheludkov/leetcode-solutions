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
  test('has width', () => {
    expect(diameterOfBinaryTree(test1_tree)).toBe(3);
    expect(diameterOfBinaryTree(test3_tree)).toBe(4);
    expect(diameterOfBinaryTree(test4_tree)).toBe(5);
    expect(diameterOfBinaryTree(test5_tree)).toBe(5);
    expect(diameterOfBinaryTree(test6_tree)).toBe(5);
    expect(diameterOfBinaryTree(test7_tree)).toBe(6);
    expect(diameterOfBinaryTree(test8_tree)).toBe(6);
  });

  test('thin cases', () => {
    expect(diameterOfBinaryTree(test9_tree)).toBe(0);
    expect(diameterOfBinaryTree(test10_tree)).toBe(1);
  });
});