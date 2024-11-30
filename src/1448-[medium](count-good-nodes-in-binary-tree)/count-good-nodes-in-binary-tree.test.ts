import { BinaryTreeNode } from '../models/binary-tree-node';
import { goodNodes } from './count-good-nodes-in-binary-tree';

const tree1 = new BinaryTreeNode(1);
const tree2 =  new BinaryTreeNode(3,
  new BinaryTreeNode(3,
    new BinaryTreeNode(4),
    new BinaryTreeNode(2),
  ),
);

const tree3 =  new BinaryTreeNode(3,
  new BinaryTreeNode(1,
    new BinaryTreeNode(3),
  ),
  new BinaryTreeNode(4,
    new BinaryTreeNode(1),
    new BinaryTreeNode(5),
  ),
);

const tree4 = new BinaryTreeNode(1,
  new BinaryTreeNode(2,
    new BinaryTreeNode(4),
    new BinaryTreeNode(5),
  ),
  new BinaryTreeNode(3,
    new BinaryTreeNode(6),
    new BinaryTreeNode(7),
  ),
);

const tree5 = new BinaryTreeNode(3,
  new BinaryTreeNode(2,
    new BinaryTreeNode(1),
    new BinaryTreeNode(1),
  ),
  new BinaryTreeNode(2,
    new BinaryTreeNode(1),
    new BinaryTreeNode(1),
  ),
);


test.each<{ tree: BinaryTreeNode | null; expected: number }>([
  { tree: tree1, expected: 1 },
  { tree: tree2, expected: 3 },
  { tree: tree3, expected: 4 },
  { tree: tree4, expected: 7 },
  { tree: tree5, expected: 1 },
])('count good nodes in binary tree', ({ tree, expected }) => {
  expect(goodNodes(tree)).toEqual(expected);
});
