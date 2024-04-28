import { BinaryTreeNode } from '../models/binary-tree-node';
import { averageOfLevels } from './average-of-levels-in-binary-tree';

const tree1 = new BinaryTreeNode(3, new BinaryTreeNode(9), new BinaryTreeNode(20, new BinaryTreeNode(15), new BinaryTreeNode(7)));
const tree2 = new BinaryTreeNode(3, new BinaryTreeNode(9, new BinaryTreeNode(15, new BinaryTreeNode(53)), new BinaryTreeNode(7, null,  new BinaryTreeNode(5))), new BinaryTreeNode(20, new BinaryTreeNode(21,  new BinaryTreeNode(10)), new BinaryTreeNode(90, null,  new BinaryTreeNode(40))));

test.each([
  { tree: tree1, expected: [3,14.5,11] },
  { tree: tree2, expected: [3,14.5,33.25,27] },
])('average of levels in binary tree', ({ tree, expected }) => {
  expect(averageOfLevels(tree)).toEqual(expected);
});
