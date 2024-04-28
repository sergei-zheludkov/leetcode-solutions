import { BinaryTreeNode } from '../models/binary-tree-node';
import { pathSum } from './path-sum-II';

const tree1 = new BinaryTreeNode(1, new BinaryTreeNode(2));
const tree2 = new BinaryTreeNode(1, new BinaryTreeNode(2), new BinaryTreeNode(3));
const tree3 = new BinaryTreeNode(5, new BinaryTreeNode(4, new BinaryTreeNode(11, new BinaryTreeNode(7), new BinaryTreeNode(2))), new BinaryTreeNode(8, new BinaryTreeNode(13), new BinaryTreeNode(4, new BinaryTreeNode(5), new BinaryTreeNode(1))));

test.each([
  { tree: tree1, targetSum: 0, expected: [] },
  { tree: tree2, targetSum: 5, expected: [] },
  { tree: tree3, targetSum: 22, expected: [[5,4,11,2],[5,8,4,5]] },
])('path sum II', ({ tree, targetSum, expected }) => {
  expect(pathSum(tree, targetSum)).toEqual(expected);
});
