import { levelOrder } from './binary-tree-level-order-traversal';
import { BinaryTreeNode } from '../models/binary-tree-node';

const tree1 = null;
const tree2 = new BinaryTreeNode(1);
const tree3 =  new BinaryTreeNode(1,  new BinaryTreeNode(2, new BinaryTreeNode(4), new BinaryTreeNode(5)), new BinaryTreeNode(3));
const tree4 =  new BinaryTreeNode(1,  new BinaryTreeNode(2, new BinaryTreeNode(4)), new BinaryTreeNode(3, new BinaryTreeNode(5)));
const tree5 = new BinaryTreeNode(1,  new BinaryTreeNode(2, new BinaryTreeNode(4, new BinaryTreeNode(8)), new BinaryTreeNode(5)), new BinaryTreeNode(3, new BinaryTreeNode(6), new BinaryTreeNode(7)));
const tree6 = new BinaryTreeNode(3, new BinaryTreeNode(9), new BinaryTreeNode(20, new BinaryTreeNode(15), new BinaryTreeNode(7)));
const tree7 = new BinaryTreeNode(1,  new BinaryTreeNode(2, null, new BinaryTreeNode(4, new BinaryTreeNode(6), new BinaryTreeNode(7))), new BinaryTreeNode(3, new BinaryTreeNode(5, null, new BinaryTreeNode(8))));

test.each<{ tree: BinaryTreeNode | null; expected: number[][] }>([
  { tree: tree1, expected: [] },
  { tree: tree2, expected: [[1]] },
  { tree: tree3, expected: [[1],[2,3],[4,5]] },
  { tree: tree4, expected: [[1],[2,3],[4,5]] },
  { tree: tree5, expected: [[1],[2,3],[4,5,6,7],[8]] },
  { tree: tree6, expected: [[3],[9,20],[15,7]] },
  { tree: tree7, expected: [[1],[2,3],[4,5],[6,7,8]] },
])('binary tree level order traversal', ({ tree, expected }) => {
  expect(levelOrder(tree)).toEqual(expected);
});