import { BinaryTreeNode } from '../models/binary-tree-node';
import { findBottomLeftValue } from './find-bottom-left-tree-value';

const test1_tree = new BinaryTreeNode(2, new BinaryTreeNode(1), new BinaryTreeNode(3)); // => 1;
const test2_tree = new BinaryTreeNode(1, new BinaryTreeNode(2), new BinaryTreeNode(3, new BinaryTreeNode(4))); // => 4
const test3_tree = new BinaryTreeNode(1, new BinaryTreeNode(2), new BinaryTreeNode(3, null, new BinaryTreeNode(5))); // => 5
const test4_tree = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4)), new BinaryTreeNode(3, new BinaryTreeNode(5), new BinaryTreeNode(6, new BinaryTreeNode(7)))); // => 7;
const test5_tree = new BinaryTreeNode(1, new BinaryTreeNode(2, new BinaryTreeNode(4)), new BinaryTreeNode(3, new BinaryTreeNode(5), new BinaryTreeNode(6))); // => 4;

test('find bottom left tree value', () => {
  expect(findBottomLeftValue(test1_tree)).toBe(1);
  expect(findBottomLeftValue(test2_tree)).toBe(4);
  expect(findBottomLeftValue(test3_tree)).toBe(5);
  expect(findBottomLeftValue(test4_tree)).toBe(7);
  expect(findBottomLeftValue(test5_tree)).toBe(4);
});
