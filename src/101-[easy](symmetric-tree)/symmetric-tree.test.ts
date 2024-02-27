import { TreeNode } from '../models/tree-node';
import { isSymmetric } from './symmetric-tree';

const test1_tree = new TreeNode();
const test2_tree = new TreeNode(1);
const test3_tree = new TreeNode(1, new TreeNode(2, new TreeNode(3 ), new TreeNode(4 )),  new TreeNode(2, new TreeNode(4 ), new TreeNode(3 )));
const test4_tree = new TreeNode(1, new TreeNode(2, null, new TreeNode(3 )),  new TreeNode(2, null, new TreeNode(3 )));
const test5_tree = new TreeNode(0, new TreeNode(0, null, new TreeNode(0 )),  new TreeNode(0, null, new TreeNode(0 )));

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
