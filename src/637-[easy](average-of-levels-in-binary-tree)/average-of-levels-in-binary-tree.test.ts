import { TreeNode } from '../models/tree-node';
import { averageOfLevels } from './average-of-levels-in-binary-tree';

const tree1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const tree2 = new TreeNode(3, new TreeNode(9, new TreeNode(15, new TreeNode(53)), new TreeNode(7, null,  new TreeNode(5))), new TreeNode(20, new TreeNode(21,  new TreeNode(10)), new TreeNode(90, null,  new TreeNode(40))));

test.each([
  { tree: tree1, expected: [3,14.5,11] },
  { tree: tree2, expected: [3,14.5,33.25,27] },
])('average of levels in binary tree', ({ tree, expected }) => {
  expect(averageOfLevels(tree)).toEqual(expected);
});
