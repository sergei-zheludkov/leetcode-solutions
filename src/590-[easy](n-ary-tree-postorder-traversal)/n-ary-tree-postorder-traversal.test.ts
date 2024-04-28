import { TreeNode } from '../models/tree-node';
import { postorder } from './n-ary-tree-postorder-traversal';

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
  { tree: tree1, expected: [5,6,3,2,4,1] },
  { tree: tree2, expected: [2,6,14,11,7,3,12,8,4,13,9,10,5,1] },
])('n ary tree postorder traversal', ({ tree, expected }) => {
  expect(postorder(tree)).toEqual(expected);
});
