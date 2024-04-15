import { TreeNode } from '../models/tree-node';
import { smallestFromLeaf } from './smallest-string-starting-from-leaf';

const tree1 = new TreeNode(0, new TreeNode(1, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(3), new TreeNode(4)));
const tree2 = new TreeNode(25, new TreeNode(1, new TreeNode(1), new TreeNode(3)), new TreeNode(3, new TreeNode(0), new TreeNode(2)));
const tree3 = new TreeNode(2, new TreeNode(2, null, new TreeNode(1, new TreeNode(0))), new TreeNode(1, new TreeNode(0)));
const tree4 = new TreeNode(1, new TreeNode(25), new TreeNode(1, new TreeNode(1)));

test.each([
  { tree: tree1, expected: 'dba' },
  { tree: tree2, expected: 'adz' },
  { tree: tree3, expected: 'abc' },
  { tree: tree4, expected: 'bbb' },
])('smallest string starting from leaf', ({ tree, expected }) => {
  expect(smallestFromLeaf(tree)).toBe(expected);
});