import { TreeNode } from '../models/tree-node';
import { sortedArrayToBST } from './convert-sorted-array-to-binary-search-tree';

const result1 = new TreeNode(0, new TreeNode(-3, new TreeNode(-10), null), new TreeNode(9, new TreeNode(5), null));
const result2 = new TreeNode(3, new TreeNode(1));
const result3 = new TreeNode(1, new TreeNode(-3, new TreeNode(-10), new TreeNode(0)), new TreeNode(9, new TreeNode(5)));

test('convert sorted array to binary search tree', () => {
  expect(sortedArrayToBST([-10,-3,0,5,9])).toEqual(result1);
  expect(sortedArrayToBST([1,3])).toEqual(result2);
  expect(sortedArrayToBST([-10,-3,0,1,5,9])).toEqual(result3);
});
