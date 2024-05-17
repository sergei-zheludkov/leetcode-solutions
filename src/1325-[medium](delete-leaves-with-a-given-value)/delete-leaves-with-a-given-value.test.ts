import { BinaryTreeNode } from '../models/binary-tree-node';
import { removeLeafNodes } from './delete-leaves-with-a-given-value';

const tree1 = new BinaryTreeNode(1,
  new BinaryTreeNode(2,
    new BinaryTreeNode(2),
  ),
  new BinaryTreeNode(3,
    new BinaryTreeNode(2),
    new BinaryTreeNode(4),
  ),
);
const expected1 = new BinaryTreeNode(1,
  null,
  new BinaryTreeNode(3,
    null,
    new BinaryTreeNode(4),
  ),
);

const tree2 = new BinaryTreeNode(1,
  new BinaryTreeNode(3,
    new BinaryTreeNode(3),
    new BinaryTreeNode(2),
  ),
  new BinaryTreeNode(3),
);
const expected2 = new BinaryTreeNode(1,
  new BinaryTreeNode(3,
    null,
    new BinaryTreeNode(2),
  ),
);

const tree3 = new BinaryTreeNode(1,
  new BinaryTreeNode(2,
    new BinaryTreeNode(2,
      new BinaryTreeNode(2),
    ),
  ),
);
const expected3 = new BinaryTreeNode(1);

const tree4 = new BinaryTreeNode(1,
  new BinaryTreeNode(1),
  new BinaryTreeNode(1),
);

test.each([
  { tree: tree1, target: 2, expected: expected1 },
  { tree: tree2, target: 3, expected: expected2 },
  { tree: tree3, target: 2, expected: expected3 },
  { tree: tree4, target: 1, expected: null },
])('delete leaves with a given value', ({ tree, target, expected }) => {
  expect(removeLeafNodes(tree, target)).toEqual(expected);
});
