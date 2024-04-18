import { TreeNode } from '../models/tree-node';
import { searchBST } from './search-in-a-binary-search-tree';

const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(8), new TreeNode(9)), new TreeNode(5, new TreeNode(10), new TreeNode(11))), new TreeNode(3, new TreeNode(6, new TreeNode(12), new TreeNode(13)), new TreeNode(7, new TreeNode(14), new TreeNode(15))));

test.each([
  { tree, val: 2, expected: tree.left },
  { tree, val: 4, expected: tree.left?.left },
  { tree, val: 6, expected: tree.right?.left },
  { tree, val: 13, expected: tree.right?.left?.right },
])('search in a binary search tree', ({ tree: head, val, expected }) => {
  expect(searchBST(head, val)).toBe(expected);
});
