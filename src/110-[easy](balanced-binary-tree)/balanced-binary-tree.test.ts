import { BinaryTreeNode } from '../models/binary-tree-node';
import { isBalanced } from './balanced-binary-tree';

const test1_tree = new BinaryTreeNode(3, new BinaryTreeNode(9), new BinaryTreeNode(20, new BinaryTreeNode(15), new BinaryTreeNode(7)));
const test2_tree = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(3, new BinaryTreeNode(4), new BinaryTreeNode(4)), new BinaryTreeNode(3)), new BinaryTreeNode(2));

describe('balanced binary tree', () => {
  test('truthy cases', () => {
    expect(isBalanced(test1_tree)).toBeTruthy();
  });

  test('falsy cases', () => {
    expect(isBalanced(test2_tree)).toBeFalsy();
  });
});
