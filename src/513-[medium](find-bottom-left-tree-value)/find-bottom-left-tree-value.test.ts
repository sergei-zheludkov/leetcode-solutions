import { TreeNode } from '../models/tree-node';
import { findBottomLeftValue } from './find-bottom-left-tree-value';

const test1_tree = new TreeNode(2, new TreeNode(1), new TreeNode(3)); // => 1;
const test2_tree = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4))); // => 4
const test3_tree = new TreeNode(1, new TreeNode(2), new TreeNode(3, null, new TreeNode(5))); // => 5
const test4_tree = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, new TreeNode(5), new TreeNode(6, new TreeNode(7)))); // => 7;
const test5_tree = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, new TreeNode(5), new TreeNode(6))); // => 4;

test('find bottom left tree value', () => {
  expect(findBottomLeftValue(test1_tree)).toBe(1);
  expect(findBottomLeftValue(test2_tree)).toBe(4);
  expect(findBottomLeftValue(test3_tree)).toBe(5);
  expect(findBottomLeftValue(test4_tree)).toBe(7);
  expect(findBottomLeftValue(test5_tree)).toBe(4);
});
