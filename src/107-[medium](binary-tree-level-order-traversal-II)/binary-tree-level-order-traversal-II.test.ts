import { BinaryTreeNode } from '../models/binary-tree-node';
import { levelOrderBottom } from './binary-tree-level-order-traversal-II';

const tree1 = null;
const tree2 = new BinaryTreeNode(1);
const tree3 =  new BinaryTreeNode(1,  new BinaryTreeNode(2, new BinaryTreeNode(4), new BinaryTreeNode(5)), new BinaryTreeNode(3));
const tree4 =  new BinaryTreeNode(1,  new BinaryTreeNode(2, new BinaryTreeNode(4)), new BinaryTreeNode(3, new BinaryTreeNode(5)));
const tree5 = new BinaryTreeNode(3, new BinaryTreeNode(9), new BinaryTreeNode(20, new BinaryTreeNode(15), new BinaryTreeNode(7)));
const tree6 = new BinaryTreeNode(1,  new BinaryTreeNode(2, new BinaryTreeNode(4, new BinaryTreeNode(8)), new BinaryTreeNode(5)), new BinaryTreeNode(3, new BinaryTreeNode(6), new BinaryTreeNode(7)));
const tree7 = new BinaryTreeNode(1,  new BinaryTreeNode(2, null, new BinaryTreeNode(4, new BinaryTreeNode(6), new BinaryTreeNode(7))), new BinaryTreeNode(3, new BinaryTreeNode(5, null, new BinaryTreeNode(8))));

test.each<{ tree: BinaryTreeNode | null; expected: number[][] }>([
  { tree: tree1, expected: [] },
  { tree: tree2, expected: [[1]] },
  { tree: tree3, expected: [[4,5],[2,3],[1]] },
  { tree: tree4, expected: [[4,5],[2,3],[1]] },
  { tree: tree5, expected: [[15,7],[9,20],[3]] },
  { tree: tree6, expected: [[8],[4,5,6,7],[2,3],[1]] },
  { tree: tree7, expected: [[6,7,8],[4,5],[2,3],[1]] },
])('binary tree level order traversal II', ({ tree, expected }) => {
  expect(levelOrderBottom(tree)).toEqual(expected);
});