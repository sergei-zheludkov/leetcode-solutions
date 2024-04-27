import { TreeNode } from '../models/tree-node';
import { zigzagLevelOrder } from './binary-tree-zigzag-level-order-traversal';

const tree1 = null;
const tree2 = new TreeNode(1);
const tree3 = new TreeNode(3,  new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const tree4 = new TreeNode(3,  new TreeNode(9, new TreeNode(6), new TreeNode(1)), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const tree5 =  new TreeNode(3,  new TreeNode(9, new TreeNode(6, new TreeNode(19), new TreeNode(29)), new TreeNode(1, new TreeNode(11), new TreeNode(21))), new TreeNode(20, new TreeNode(15, new TreeNode(25), new TreeNode(5)), new TreeNode(7, new TreeNode(17), new TreeNode(27))));

test.each<{ tree: TreeNode | null; expected: number[][] }>([
  { tree: tree1, expected: [] },
  { tree: tree2, expected: [[1]] },
  { tree: tree3, expected: [[3],[20,9],[15,7]] },
  { tree: tree4, expected: [[3],[20,9],[6,1,15,7]] },
  { tree: tree5, expected: [[3],[20,9],[6,1,15,7],[27,17,5,25,21,11,29,19]] },
])('binary tree zigzag level order traversal', ({ tree, expected }) => {
  expect(zigzagLevelOrder(tree)).toEqual(expected);
});