import { TreeNode } from '../models/tree-node';
import { addOneRow } from './add-one-row-to-tree';

const tree1 = new TreeNode(4, new TreeNode(2, new TreeNode(3), new TreeNode(1)), new TreeNode(6, new TreeNode(5)));
const expected1 = new TreeNode(4, new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(1))), new TreeNode(1, null, new TreeNode(6, new TreeNode(5))));

const tree2 = new TreeNode(4, new TreeNode(2, new TreeNode(3), new TreeNode(1)), new TreeNode(6, new TreeNode(5)));
const expected2 = new TreeNode(4, new TreeNode(2, new TreeNode(1, new TreeNode(3)), new TreeNode(1, null, new TreeNode(1))), new TreeNode(6, new TreeNode(1, new TreeNode(5)), new TreeNode(1)));

const tree3 = new TreeNode(4, new TreeNode(2, new TreeNode(3), new TreeNode(1)));
const expected3 = new TreeNode(4, new TreeNode(2, new TreeNode(1, new TreeNode(3)), new TreeNode(1, null, new TreeNode(1))));

const tree4 = new TreeNode(4, new TreeNode(2, new TreeNode(3), new TreeNode(1)));
const expected4 = new TreeNode(4, new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(1))), new TreeNode(1));

const tree5 = new TreeNode(4, new TreeNode(2, new TreeNode(3), new TreeNode(1)));
const expected5 = new TreeNode(1, new TreeNode(4, new TreeNode(2, new TreeNode(3), new TreeNode(1))));


test.each([
  { tree: tree1, val: 1, depth: 2, expected: expected1 },
  { tree: tree2, val: 1, depth: 3, expected: expected2 },
  { tree: tree3, val: 1, depth: 3, expected: expected3 },
  { tree: tree4, val: 1, depth: 2, expected: expected4 },
  { tree: tree5, val: 1, depth: 1, expected: expected5 },
])('add one row to tree', ({ tree, val, depth, expected }) => {
  expect(addOneRow(tree, val, depth)).toEqual(expected);
});
