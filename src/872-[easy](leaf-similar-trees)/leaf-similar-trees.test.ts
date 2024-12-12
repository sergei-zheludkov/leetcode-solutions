import { BinaryTreeNode } from '../models/binary-tree-node';
import { leafSimilar } from './leaf-similar-trees';

const test1_tree1 = new BinaryTreeNode(1);
const test1_tree2 = new BinaryTreeNode(1);

const test2_tree1 = new BinaryTreeNode(1,
  new BinaryTreeNode(2),
  new BinaryTreeNode(3),
);
const test2_tree2 = new BinaryTreeNode(1,
  new BinaryTreeNode(4,
    new BinaryTreeNode(2),
  ),
  new BinaryTreeNode(3),
);

const test3_tree1 = new BinaryTreeNode(3,
  new BinaryTreeNode(5,
    new BinaryTreeNode(6),
    new BinaryTreeNode(2,
      new BinaryTreeNode(7),
      new BinaryTreeNode(4),
    ),
  ),
  new BinaryTreeNode(1,
    new BinaryTreeNode(9),
    new BinaryTreeNode(8),
  ),
);

const test3_tree2 = new BinaryTreeNode(3,
  new BinaryTreeNode(5,
    new BinaryTreeNode(6),
    new BinaryTreeNode(7),
  ),
  new BinaryTreeNode(1,
    new BinaryTreeNode(4),
    new BinaryTreeNode(2,
      new BinaryTreeNode(9),
      new BinaryTreeNode(8),
    ),
  ),
);

const test4_tree1 = new BinaryTreeNode(1);
const test4_tree2 = new BinaryTreeNode(3);

const test5_tree1 = new BinaryTreeNode(1,
  new BinaryTreeNode(2),
  new BinaryTreeNode(3),
);
const test5_tree2 = new BinaryTreeNode(1,
  new BinaryTreeNode(3),
  new BinaryTreeNode(2),
);

const test6_tree1 = new BinaryTreeNode(3,
  new BinaryTreeNode(5,
    new BinaryTreeNode(6),
    new BinaryTreeNode(2,
      new BinaryTreeNode(7),
      new BinaryTreeNode(4),
    ),
  ),
  new BinaryTreeNode(1,
    new BinaryTreeNode(9),
    new BinaryTreeNode(8),
  ),
);

const test6_tree2 = new BinaryTreeNode(3,
  new BinaryTreeNode(5,
    new BinaryTreeNode(6),
    new BinaryTreeNode(7),
  ),
  new BinaryTreeNode(1,
    new BinaryTreeNode(4),
    new BinaryTreeNode(8,
      new BinaryTreeNode(9),
      new BinaryTreeNode(2),
    ),
  ),
);


describe('leaf similar trees', () => {
  test.each([
    { tree1: test1_tree1, tree2: test1_tree2 },
    { tree1: test2_tree1, tree2: test2_tree2 },
    { tree1: test3_tree1, tree2: test3_tree2 },
  ])('truthy cases', ({ tree1, tree2 }) => {

    expect(leafSimilar(tree1, tree2)).toBeTruthy();
  });

  test.each([
    { tree1: test4_tree1, tree2: test4_tree2 },
    { tree1: test5_tree1, tree2: test5_tree2 },
    { tree1: test6_tree1, tree2: test6_tree2 },
  ])('falsy cases', ({ tree1, tree2 }) => {
    expect(leafSimilar(tree1, tree2)).toBeFalsy();
  });
});
