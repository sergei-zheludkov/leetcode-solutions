import { TreeNode } from '../models/tree-node';
import { hasPathSum } from './path-sum';

const tree1 = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))));
const tree2 = new TreeNode(1, new TreeNode(2 ), new TreeNode(3));


describe('path sum', () => {
  test.each([
    { tree: tree1, targetSum: 22 },
    { tree: tree1, targetSum: 26 },
    { tree: tree2, targetSum: 3 },
    { tree: tree2, targetSum: 4 },
  ])('truthy cases', ({ tree, targetSum }) => {
    expect(hasPathSum(tree, targetSum)).toBeTruthy();
  });

  test.each([
    { tree: tree1, targetSum: 0 },
    { tree: tree1, targetSum: 7 },
    { tree: tree1, targetSum: 55 },
    { tree: tree2, targetSum: 5 },
    { tree: tree2, targetSum: 11 },
  ])('falsy cases', ({ tree, targetSum }) => {
    expect(hasPathSum(tree, targetSum)).toBeFalsy();
  });
});
