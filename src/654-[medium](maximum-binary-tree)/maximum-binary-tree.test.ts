import { BinaryTreeNode } from '../models/binary-tree-node';
import { constructMaximumBinaryTree } from './maximum-binary-tree';

const tree1 = new BinaryTreeNode(3, 
  null,
  new BinaryTreeNode(2,
    null,
    new BinaryTreeNode(1),
  ),
);

const tree2 = new BinaryTreeNode(6,
  new BinaryTreeNode(3,
    null,
    new BinaryTreeNode(2,
      null,
      new BinaryTreeNode(1),
    ),
  ),
  new BinaryTreeNode(5,
    new BinaryTreeNode(0),
  ),
);

const tree3 = new BinaryTreeNode(13,
  new BinaryTreeNode(11,
    new BinaryTreeNode(9,
      new BinaryTreeNode(7,
        new BinaryTreeNode(4,
          null,
          new BinaryTreeNode(3,
            new BinaryTreeNode(1),
          ),
        ),
      ),
    ),
    new BinaryTreeNode(6),
  ),
  new BinaryTreeNode(5,
    new BinaryTreeNode(2),
  ),
);

test.each([
  { nums: [3,2,1], expected: tree1 },
  { nums: [3,2,1,6,0,5], expected: tree2 },
  { nums: [4,1,3,7,9,11,6,13,2,5], expected: tree3 },
])('maximum binary tree', ({ nums, expected }) => {
  expect(constructMaximumBinaryTree(nums)).toEqual(expected);
});
