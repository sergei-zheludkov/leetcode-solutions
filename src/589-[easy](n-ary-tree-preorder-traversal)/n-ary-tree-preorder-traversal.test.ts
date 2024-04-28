import { TreeNode } from '../models/tree-node';
import { preorder } from './n-ary-tree-preorder-traversal';

const tree1 = new TreeNode(1,
  new TreeNode(3,
    new TreeNode(5),
    new TreeNode(6),
  ),
  new TreeNode(2),
  new TreeNode(4),
);

const tree2 = new TreeNode(1,
  new TreeNode(2),
  new TreeNode(3,
    new TreeNode(6),
    new TreeNode(7,
      new TreeNode(11,
        new TreeNode(14),
      ),
    ),
  ),
  new TreeNode(4,
    new TreeNode(8,
      new TreeNode(12),
    ),
  ),
  new TreeNode(5,
    new TreeNode(9,
      new TreeNode(13),
    ),
    new TreeNode(10),
  ),
);

test.each([
  { tree: tree1, expected: [1,3,5,6,2,4] },
  { tree: tree2, expected: [1,2,3,6,7,11,14,4,8,12,5,9,13,10] },
])('n ary tree preorder traversal', ({ tree, expected }) => {
  expect(preorder(tree)).toEqual(expected);
});
