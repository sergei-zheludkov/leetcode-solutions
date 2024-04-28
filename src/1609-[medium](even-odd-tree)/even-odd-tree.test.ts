import { BinaryTreeNode } from '../models/binary-tree-node';
import { isEvenOddTree } from './even-odd-tree';

const test1_tree = new BinaryTreeNode(
  1, 
  new BinaryTreeNode(
    10,
    new BinaryTreeNode(
      3,
      new BinaryTreeNode(12),
      new BinaryTreeNode(8),
    ),
  ),
  new BinaryTreeNode(
    4,
    new BinaryTreeNode(
      7,
      new BinaryTreeNode(6),
    ),
    new BinaryTreeNode(
      9,
      null,
      new BinaryTreeNode(2),
    ),
  ),
);

const test2_tree = new BinaryTreeNode(
  5,
  new BinaryTreeNode(
    4,
    new BinaryTreeNode(3),
    new BinaryTreeNode(3),
  ),
  new BinaryTreeNode(
    2,
    new BinaryTreeNode(7),
  ),
);

const test3_tree = new BinaryTreeNode(
  5,
  new BinaryTreeNode(
    9,
    new BinaryTreeNode(3),
    new BinaryTreeNode(5),
  ),
  new BinaryTreeNode(
    1,
    new BinaryTreeNode(7),
  ),
);

describe('even odd tree', () => {
  test('truthy cases', () => {
    expect(isEvenOddTree(test1_tree)).toBeTruthy();
  });

  test.each([test2_tree, test3_tree])('falsy cases', (tree) => {
    expect(isEvenOddTree(tree)).toBeFalsy();
  });
});