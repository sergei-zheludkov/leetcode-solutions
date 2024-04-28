import { BinaryTreeNode } from '../models/binary-tree-node';
import { hasPathSum } from './path-sum';

const tree1 = new BinaryTreeNode(5, new BinaryTreeNode(4, new BinaryTreeNode(11, new BinaryTreeNode(7), new BinaryTreeNode(2))), new BinaryTreeNode(8, new BinaryTreeNode(13), new BinaryTreeNode(4, null, new BinaryTreeNode(1))));
const tree2 = new BinaryTreeNode(1, new BinaryTreeNode(2 ), new BinaryTreeNode(3));


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
