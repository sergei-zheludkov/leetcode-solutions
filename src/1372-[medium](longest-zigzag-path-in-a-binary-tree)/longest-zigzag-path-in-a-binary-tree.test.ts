import { BinaryTreeNode } from '../models/binary-tree-node';
import { longestZigZag } from './longest-zigzag-path-in-a-binary-tree';

const tree1 = new BinaryTreeNode(1);

const tree2 = new BinaryTreeNode(1,
  new BinaryTreeNode(1),
  new BinaryTreeNode(1),
);

const tree3 = new BinaryTreeNode(1,
  null,
  new BinaryTreeNode(1,
    new BinaryTreeNode(1),
    new BinaryTreeNode(1,
      new BinaryTreeNode(1,
        null,
        new BinaryTreeNode(1,
          null,
          new BinaryTreeNode(1),
        ),
      ),
      new BinaryTreeNode(1),
    ),
  ),
);

const tree4 = new BinaryTreeNode(1,
  new BinaryTreeNode(1,
    null,
    new BinaryTreeNode(1,
      new BinaryTreeNode(1,
        null,
        new BinaryTreeNode(1),
      ),
      new BinaryTreeNode(1),
    ),
  ),
  new BinaryTreeNode(1),
);

test.each([
  { tree: tree1, expected: 0 },
  { tree: tree2, expected: 1 },
  { tree: tree3, expected: 3 },
  { tree: tree4, expected: 4 },
])('longest zigzag path in a binary tree', ({ tree, expected }) => {
  expect(longestZigZag(tree)).toBe(expected);
});
