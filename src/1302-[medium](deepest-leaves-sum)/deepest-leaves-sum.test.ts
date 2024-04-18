import { TreeNode } from '../models/tree-node';
import { deepestLeavesSum } from './deepest-leaves-sum';

const tree1 = new TreeNode(1);
const tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(7)), new TreeNode(5)), new TreeNode(3, new TreeNode(6, null, new TreeNode(8))));
const tree3 = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(7)), new TreeNode(5)), new TreeNode(3, new TreeNode(6)));
const tree4 = new TreeNode(6, new TreeNode(7, new TreeNode(2, new TreeNode(9)), new TreeNode(7, new TreeNode(1), new TreeNode(4))), new TreeNode(8, new TreeNode(1), new TreeNode(3, null, new TreeNode(5))));
const tree5 = new TreeNode(6, new TreeNode(7, new TreeNode(2, new TreeNode(9)), new TreeNode(7, null, new TreeNode(4))), new TreeNode(8, new TreeNode(1), new TreeNode(3, null, new TreeNode(5))));

test.each([
  { tree: tree1, expected: 1 },
  { tree: tree2, expected: 15 },
  { tree: tree3, expected: 7 },
  { tree: tree4, expected: 19 },
  { tree: tree5, expected: 18 },
])('deepest leaves sum', ({ tree, expected }) => {
  expect(deepestLeavesSum(tree)).toBe(expected);
});