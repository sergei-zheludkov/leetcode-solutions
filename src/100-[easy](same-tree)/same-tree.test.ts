import { TreeNode } from '../models/tree-node';
import { isSameTree } from './same-tree';

const test1_tree1 = new TreeNode(1, new TreeNode(2 ), new TreeNode(3 ));
const test1_tree2 = new TreeNode(1, new TreeNode(2 ), new TreeNode(3 ));
const test2_tree1 = new TreeNode(1, new TreeNode(2 ), new TreeNode(1));
const test2_tree2 = new TreeNode(1, new TreeNode(1 ), new TreeNode(2));
const test3_tree1 = new TreeNode(1, new TreeNode(2 ));
const test3_tree2 = new TreeNode(1, null, new TreeNode(3 ));
const test4_tree1 = new TreeNode(1);
const test4_tree2 = new TreeNode();
const test5_tree1 = new TreeNode();
const test5_tree2 = null;
const test6_tree = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(8), new TreeNode(9)), new TreeNode(5, new TreeNode(10), new TreeNode(11))), new TreeNode(3, new TreeNode(6), new TreeNode(7)));

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
