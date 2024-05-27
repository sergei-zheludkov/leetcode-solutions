import { BinaryTreeNode } from '../models/binary-tree-node';
import { rangeSumBST } from './range-sum-of-bst';

const tree1 = new BinaryTreeNode(10,
  new BinaryTreeNode(5,
    new BinaryTreeNode(3),
    new BinaryTreeNode(7),
  ),
  new BinaryTreeNode(15,
    null,
    new BinaryTreeNode(18),
  ),
);

const tree2 = new BinaryTreeNode(10,
  new BinaryTreeNode(5,
    new BinaryTreeNode(3,
      new BinaryTreeNode(1),
    ),
    new BinaryTreeNode(7,
      new BinaryTreeNode(6),
    ),
  ),
  new BinaryTreeNode(15,
    new BinaryTreeNode(13),
    new BinaryTreeNode(18),
  ),
);

test.each([
  { tree: tree1, low: 7, high: 15, expected: 32 },
  { tree: tree2, low: 6, high: 10, expected: 23 },
])('range sum of bst', ({ tree, low, high, expected }) => {
  expect(rangeSumBST(tree, low, high)).toBe(expected);
});
