import { TreeNode } from '../models/tree-node';
import { sumOfLeftLeaves } from './sum-of-left-leaves';

const tree1 = new TreeNode(3);
const tree2 = new TreeNode(3, new TreeNode(9), new TreeNode(20,  new TreeNode(15), new TreeNode(7)));
const tree3 = new TreeNode(3, new TreeNode(9, new TreeNode(11)), new TreeNode(20,  new TreeNode(15), new TreeNode(7)));
const tree4 = new TreeNode(3, new TreeNode(9, new TreeNode(11, new TreeNode(2), new TreeNode(40))), new TreeNode(20,  new TreeNode(15, new TreeNode(3)), new TreeNode(7)));
const tree5 = new TreeNode(3, new TreeNode(9, new TreeNode(11, new TreeNode(2), new TreeNode(40, new TreeNode(1)))), new TreeNode(20,  new TreeNode(15, new TreeNode(3)), new TreeNode(7)));
const tree6 = new TreeNode(0, new TreeNode(2, new TreeNode(1, new TreeNode(5), new TreeNode(1))), new TreeNode(4, new TreeNode(3, null ,new TreeNode(6)), new TreeNode(-1, null, new TreeNode(8))));

test.each([
  { tree: tree1, expected: 0 },
  { tree: tree2, expected: 24 },
  { tree: tree3, expected: 26 },
  { tree: tree4, expected: 5 },
  { tree: tree5, expected: 6 },
  { tree: tree6, expected: 5 },
])('sum of left leaves', ({ tree, expected }) => {
  expect(sumOfLeftLeaves(tree)).toBe(expected);
});
