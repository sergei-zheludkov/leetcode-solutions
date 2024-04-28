import { BinaryTreeNode } from '../models/binary-tree-node';
import { isSameTree } from './same-tree';

const test1_tree1 = new BinaryTreeNode(1, new BinaryTreeNode(2 ), new BinaryTreeNode(3 ));
const test1_tree2 = new BinaryTreeNode(1, new BinaryTreeNode(2 ), new BinaryTreeNode(3 ));
const test2_tree1 = new BinaryTreeNode(1, new BinaryTreeNode(2 ), new BinaryTreeNode(1));
const test2_tree2 = new BinaryTreeNode(1, new BinaryTreeNode(1 ), new BinaryTreeNode(2));
const test3_tree1 = new BinaryTreeNode(1, new BinaryTreeNode(2 ));
const test3_tree2 = new BinaryTreeNode(1, null, new BinaryTreeNode(3 ));
const test4_tree1 = new BinaryTreeNode(1);
const test4_tree2 = new BinaryTreeNode();
const test5_tree1 = new BinaryTreeNode();
const test5_tree2 = null;
const test6_tree = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4, new BinaryTreeNode(8), new BinaryTreeNode(9)), new BinaryTreeNode(5, new BinaryTreeNode(10), new BinaryTreeNode(11))), new BinaryTreeNode(3, new BinaryTreeNode(6), new BinaryTreeNode(7)));

describe('same tree', () => {
  test('truthy cases', () => {
    expect(isSameTree(test1_tree1, test1_tree2)).toBeTruthy();
    expect(isSameTree(test6_tree, test6_tree)).toBeTruthy();
    expect(isSameTree(test4_tree2, test5_tree1)).toBeTruthy();
  });

  test('falsy cases', () => {
    expect(isSameTree(test2_tree1, test2_tree2)).toBeFalsy();
    expect(isSameTree(test3_tree1, test3_tree2)).toBeFalsy();
    expect(isSameTree(test4_tree1, test4_tree2)).toBeFalsy();
    expect(isSameTree(test5_tree1, test5_tree2)).toBeFalsy();
  });
});
