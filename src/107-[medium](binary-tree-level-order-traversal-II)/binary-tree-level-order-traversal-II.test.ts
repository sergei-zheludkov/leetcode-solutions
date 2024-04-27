import { TreeNode } from '../models/tree-node';
import { levelOrderBottom } from './binary-tree-level-order-traversal-II';

const tree1 = null;
const tree2 = new TreeNode(1);
const tree3 =  new TreeNode(1,  new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
const tree4 =  new TreeNode(1,  new TreeNode(2, new TreeNode(4)), new TreeNode(3, new TreeNode(5)));
const tree5 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const tree6 = new TreeNode(1,  new TreeNode(2, new TreeNode(4, new TreeNode(8)), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));
const tree7 = new TreeNode(1,  new TreeNode(2, null, new TreeNode(4, new TreeNode(6), new TreeNode(7))), new TreeNode(3, new TreeNode(5, null, new TreeNode(8))));

test.each<{ tree: TreeNode | null; expected: number[][] }>([
  { tree: tree1, expected: [] },
  { tree: tree2, expected: [[1]] },
  { tree: tree3, expected: [[4,5],[2,3],[1]] },
  { tree: tree4, expected: [[4,5],[2,3],[1]] },
  { tree: tree5, expected: [[15,7],[9,20],[3]] },
  { tree: tree6, expected: [[8],[4,5,6,7],[2,3],[1]] },
  { tree: tree7, expected: [[6,7,8],[4,5],[2,3],[1]] },
])('binary tree level order traversal II', ({ tree, expected }) => {
  expect(levelOrderBottom(tree)).toEqual(expected);
});