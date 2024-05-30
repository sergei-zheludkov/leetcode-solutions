import { reverseOddLevels } from './reverse-odd-levels-of-binary-tree';
import { BinaryTreeNode } from '../models/binary-tree-node';

const tree1 = new BinaryTreeNode(2,
  new BinaryTreeNode(3,
    new BinaryTreeNode(8),
    new BinaryTreeNode(13),
  ),
  new BinaryTreeNode(5,
    new BinaryTreeNode(21),
    new BinaryTreeNode(34),
  ),
);

const expected1 = new BinaryTreeNode(2,
  new BinaryTreeNode(5,
    new BinaryTreeNode(8),
    new BinaryTreeNode(13),
  ),
  new BinaryTreeNode(3,
    new BinaryTreeNode(21),
    new BinaryTreeNode(34),
  ),
);


const tree2 = new BinaryTreeNode(7,
  new BinaryTreeNode(13),
  new BinaryTreeNode(11),
);

const expected2 = new BinaryTreeNode(7,
  new BinaryTreeNode(11),
  new BinaryTreeNode(13),
);


const tree3 = new BinaryTreeNode(7,
  new BinaryTreeNode(1,
    new BinaryTreeNode(0,
      new BinaryTreeNode(1),
      new BinaryTreeNode(2),
    ),
    new BinaryTreeNode(0,
      new BinaryTreeNode(3),
      new BinaryTreeNode(4),
    ),
  ),
  new BinaryTreeNode(2,
    new BinaryTreeNode(0,
      new BinaryTreeNode(5),
      new BinaryTreeNode(6),
    ),
    new BinaryTreeNode(0,
      new BinaryTreeNode(7),
      new BinaryTreeNode(8),
    ),
  ),
);

const expected3 = new BinaryTreeNode(7,
  new BinaryTreeNode(2,
    new BinaryTreeNode(0,
      new BinaryTreeNode(8),
      new BinaryTreeNode(7),
    ),
    new BinaryTreeNode(0,
      new BinaryTreeNode(6),
      new BinaryTreeNode(5),
    ),
  ),
  new BinaryTreeNode(1,
    new BinaryTreeNode(0,
      new BinaryTreeNode(4),
      new BinaryTreeNode(3),
    ),
    new BinaryTreeNode(0,
      new BinaryTreeNode(2),
      new BinaryTreeNode(1),
    ),
  ),
);


test.each([
  { tree: tree1, expected: expected1 },
  { tree: tree2, expected: expected2 },
  { tree: tree3, expected: expected3 },
])('reverse odd levels of binary tree', ({ tree, expected }) => {
  expect(reverseOddLevels(tree)).toEqual(expected);
});
