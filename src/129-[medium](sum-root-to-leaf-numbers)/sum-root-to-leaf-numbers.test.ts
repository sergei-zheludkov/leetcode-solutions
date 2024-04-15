import { TreeNode } from '../models/tree-node';
import { sumNumbers } from './sum-root-to-leaf-numbers';

const tree1 = new TreeNode(1);
const tree2 = new TreeNode(1, new TreeNode(0));
const tree3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree4 = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
const tree5 = new TreeNode(4, new TreeNode(9, new TreeNode(5), new TreeNode(1)), new TreeNode(0));
const tree6 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));
const tree7 = new TreeNode(1, new TreeNode(5, new TreeNode(2), new TreeNode(4)), new TreeNode(8, new TreeNode(3), new TreeNode(7)));

test.each([
  { tree: tree1, expected: 1 },
  { tree: tree2, expected: 10 },
  { tree: tree3, expected: 25 },
  { tree: tree4, expected: 137 },
  { tree: tree5, expected: 1026 },
  { tree: tree6, expected: 522 },
  { tree: tree7, expected: 676 },
])('sum root to leaf numbers', ({ tree, expected }) => {
  expect(sumNumbers(tree)).toBe(expected);
});