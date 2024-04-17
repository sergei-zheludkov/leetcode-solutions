import { TreeNode } from '../models/tree-node';
import { pathSum } from './path-sum-II';

const tree1 = new TreeNode(1, new TreeNode(2));
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree3 = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4, new TreeNode(5), new TreeNode(1))));

test.each([
  { tree: tree1, targetSum: 0, expected: [] },
  { tree: tree2, targetSum: 5, expected: [] },
  { tree: tree3, targetSum: 22, expected: [[5,4,11,2],[5,8,4,5]] },
])('path sum II', ({ tree, targetSum, expected }) => {
  expect(pathSum(tree, targetSum)).toEqual(expected);
});
