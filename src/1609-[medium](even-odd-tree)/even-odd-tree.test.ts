import { TreeNode } from '../models/tree-node';
import { isEvenOddTree } from './even-odd-tree';

const test1_tree = new TreeNode(
  1, 
  new TreeNode(
    10,
    new TreeNode(
      3,
      new TreeNode(12),
      new TreeNode(8),
    ),
  ),
  new TreeNode(
    4,
    new TreeNode(
      7,
      new TreeNode(6),
    ),
    new TreeNode(
      9,
      null,
      new TreeNode(2),
    ),
  ),
);

const test2_tree = new TreeNode(
  5,
  new TreeNode(
    4,
    new TreeNode(3),
    new TreeNode(3),
  ),
  new TreeNode(
    2,
    new TreeNode(7),
  ),
);

const test3_tree = new TreeNode(
  5,
  new TreeNode(
    9,
    new TreeNode(3),
    new TreeNode(5),
  ),
  new TreeNode(
    1,
    new TreeNode(7),
  ),
);

describe('even odd tree', () => {
  test('truthy cases', () => {
    expect(isEvenOddTree(test1_tree)).toBeTruthy();
  });

  test('falsy cases', () => {
    expect(isEvenOddTree(test2_tree)).toBeFalsy();
    expect(isEvenOddTree(test3_tree)).toBeFalsy();
  });
});