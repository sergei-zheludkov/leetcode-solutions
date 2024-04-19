import { TreeNode } from '../models/tree-node';
import { rightSideView } from './binary-tree-right-side-view';

const tree1 = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3, null, new TreeNode(4)));
const tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
const tree3 = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(6, null, new TreeNode(7))), new TreeNode(5)), new TreeNode(3));

test.each([
  { tree: null, expected: [] },
  { tree: tree1, expected: [1,3,4] },
  { tree: tree2, expected: [1,3,5] },
  { tree: tree3, expected: [1,3,5,6,7] },
])('binary tree right side view', ({ tree, expected }) => {
  expect(rightSideView(tree)).toEqual(expected);
});
