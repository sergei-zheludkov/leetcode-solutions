import { BinaryTreeNode } from '../models/binary-tree-node';
import { isSymmetric } from './symmetric-tree';

const test1_tree = new BinaryTreeNode();
const test2_tree = new BinaryTreeNode(1);
const test3_tree = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(3 ), new BinaryTreeNode(4 )),  new BinaryTreeNode(2, new BinaryTreeNode(4 ), new BinaryTreeNode(3 )));
const test4_tree = new BinaryTreeNode(1, new BinaryTreeNode(2, null, new BinaryTreeNode(3 )),  new BinaryTreeNode(2, null, new BinaryTreeNode(3 )));
const test5_tree = new BinaryTreeNode(0, new BinaryTreeNode(0, null, new BinaryTreeNode(0 )),  new BinaryTreeNode(0, null, new BinaryTreeNode(0 )));

describe('symmetric tree', () => {
  test('truthy cases', () => {
    expect(isSymmetric(null)).toBeTruthy();
    expect(isSymmetric(test1_tree)).toBeTruthy();
    expect(isSymmetric(test2_tree)).toBeTruthy();
    expect(isSymmetric(test3_tree)).toBeTruthy();
  });

  test('falsy cases', () => {
    expect(isSymmetric(test4_tree)).toBeFalsy();
    expect(isSymmetric(test5_tree)).toBeFalsy();
  });
});
