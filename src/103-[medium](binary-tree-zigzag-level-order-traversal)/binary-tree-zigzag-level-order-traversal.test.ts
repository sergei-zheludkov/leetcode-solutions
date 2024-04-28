import { BinaryTreeNode } from '../models/binary-tree-node';
import { zigzagLevelOrder } from './binary-tree-zigzag-level-order-traversal';

const tree1 = null;
const tree2 = new BinaryTreeNode(1);
const tree3 = new BinaryTreeNode(3,  new BinaryTreeNode(9), new BinaryTreeNode(20, new BinaryTreeNode(15), new BinaryTreeNode(7)));
const tree4 = new BinaryTreeNode(3,  new BinaryTreeNode(9, new BinaryTreeNode(6), new BinaryTreeNode(1)), new BinaryTreeNode(20, new BinaryTreeNode(15), new BinaryTreeNode(7)));
const tree5 =  new BinaryTreeNode(3,  new BinaryTreeNode(9, new BinaryTreeNode(6, new BinaryTreeNode(19), new BinaryTreeNode(29)), new BinaryTreeNode(1, new BinaryTreeNode(11), new BinaryTreeNode(21))), new BinaryTreeNode(20, new BinaryTreeNode(15, new BinaryTreeNode(25), new BinaryTreeNode(5)), new BinaryTreeNode(7, new BinaryTreeNode(17), new BinaryTreeNode(27))));

test.each<{ tree: BinaryTreeNode | null; expected: number[][] }>([
  { tree: tree1, expected: [] },
  { tree: tree2, expected: [[1]] },
  { tree: tree3, expected: [[3],[20,9],[15,7]] },
  { tree: tree4, expected: [[3],[20,9],[6,1,15,7]] },
  { tree: tree5, expected: [[3],[20,9],[6,1,15,7],[27,17,5,25,21,11,29,19]] },
])('binary tree zigzag level order traversal', ({ tree, expected }) => {
  expect(zigzagLevelOrder(tree)).toEqual(expected);
});