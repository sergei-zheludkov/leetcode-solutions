import { TreeNode } from '../models/tree-node';
import { isBalanced } from './balanced-binary-tree';

const test1_tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const test2_tree = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(3)), new TreeNode(2));

describe('balanced binary tree', () => {
  test('truthy cases', () => {
    expect(isBalanced(test1_tree)).toBeTruthy();
  });

  test('falsy cases', () => {
    expect(isBalanced(test2_tree)).toBeFalsy();
  });
});
