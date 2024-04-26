import { isValidBST } from './validate-binary-search-tree';
import { BinaryTreeNode } from '../models/binary-tree-node';

const tree1 = new BinaryTreeNode(2, new BinaryTreeNode(1), new BinaryTreeNode(3));
const tree2 = new BinaryTreeNode(10, new BinaryTreeNode(8, new BinaryTreeNode(6), new BinaryTreeNode(9)), new BinaryTreeNode(12));
const tree3 = new BinaryTreeNode(100, new BinaryTreeNode(80, new BinaryTreeNode(70), new BinaryTreeNode(90)), new BinaryTreeNode(120, new BinaryTreeNode(110), new BinaryTreeNode(130)));
const tree4 = new BinaryTreeNode(100, new BinaryTreeNode(80, new BinaryTreeNode(70), new BinaryTreeNode(90)), new BinaryTreeNode(120, null, new BinaryTreeNode(130)));

const tree5 = new BinaryTreeNode(2, new BinaryTreeNode(2), new BinaryTreeNode(2));
const tree6 = new BinaryTreeNode(5, new BinaryTreeNode(1), new BinaryTreeNode(4, new BinaryTreeNode(3), new BinaryTreeNode(6)));
const tree7 = new BinaryTreeNode(10, new BinaryTreeNode(8, new BinaryTreeNode(14), new BinaryTreeNode(9)), new BinaryTreeNode(12));
const tree8 = new BinaryTreeNode(100, new BinaryTreeNode(80, new BinaryTreeNode(70), new BinaryTreeNode(90)), new BinaryTreeNode(120, new BinaryTreeNode(150), new BinaryTreeNode(130)));
const tree9 = new BinaryTreeNode(5, new BinaryTreeNode(4), new BinaryTreeNode(6, new BinaryTreeNode(3), new BinaryTreeNode(7)));
const tree10 = new BinaryTreeNode(32,  new BinaryTreeNode(26, new BinaryTreeNode(19, null,  new BinaryTreeNode(27))),  new BinaryTreeNode(47, null,  new BinaryTreeNode(56)));

describe('validate binary search tree', () => {
  test.each([
    { tree: tree1 },
    { tree: tree2 },
    { tree: tree3 },
    { tree: tree4 },
  ])('truthy cases', ({ tree }) => {
    expect(isValidBST(tree)).toBeTruthy();
  });

  test.each([
    { tree: tree5 },
    { tree: tree6 },
    { tree: tree7 },
    { tree: tree8 },
    { tree: tree9 },
    { tree: tree10 },
  ])('falsy cases', ({ tree }) => {
    expect(isValidBST(tree)).toBeFalsy();
  });
});
