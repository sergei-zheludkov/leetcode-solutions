import { BinaryTreeNode } from '../models/binary-tree-node';
import { rightSideView } from './binary-tree-right-side-view';

const tree1 = new BinaryTreeNode(1, new BinaryTreeNode(2, null, new BinaryTreeNode(5)), new BinaryTreeNode(3, null, new BinaryTreeNode(4)));
const tree2 = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4), new BinaryTreeNode(5)), new BinaryTreeNode(3));
const tree3 = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4, new BinaryTreeNode(6, null, new BinaryTreeNode(7))), new BinaryTreeNode(5)), new BinaryTreeNode(3));

test.each([
  { tree: null, expected: [] },
  { tree: tree1, expected: [1,3,4] },
  { tree: tree2, expected: [1,3,5] },
  { tree: tree3, expected: [1,3,5,6,7] },
])('binary tree right side view', ({ tree, expected }) => {
  expect(rightSideView(tree)).toEqual(expected);
});
