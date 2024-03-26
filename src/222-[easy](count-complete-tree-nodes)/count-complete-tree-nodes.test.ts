import { countNodes } from './count-complete-tree-nodes';
import { TreeNode } from '../models/tree-node';

const tree1 = null;
const tree2 = new TreeNode(1);
const tree3 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6)));
const tree4 =  new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(8)), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));
const tree5 = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(8), new TreeNode(9)), new TreeNode(5, new TreeNode(10))), new TreeNode(3, new TreeNode(6), new TreeNode(7)));


test.each([
  { tree: tree1, expected: 0 },
  { tree: tree2, expected: 1 },
  { tree: tree3, expected: 6 },
  { tree: tree4, expected: 8 },
  { tree: tree5, expected: 10 },
])('count complete tree nodes', ({ tree, expected }) => {
  expect(countNodes(tree)).toBe(expected);
});
