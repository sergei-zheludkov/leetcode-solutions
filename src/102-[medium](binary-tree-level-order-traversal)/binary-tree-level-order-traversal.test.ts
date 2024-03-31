import { levelOrder } from './binary-tree-level-order-traversal';
import { TreeNode } from '../models/tree-node';

const tree1 = null;
const tree2 = new TreeNode(1);
const tree3 =  new TreeNode(1,  new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
const tree4 =  new TreeNode(1,  new TreeNode(2, new TreeNode(4)), new TreeNode(3, new TreeNode(5)));
const tree5 = new TreeNode(1,  new TreeNode(2, new TreeNode(4, new TreeNode(8)), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));
const tree6 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const tree7 = new TreeNode(1,  new TreeNode(2, null, new TreeNode(4, new TreeNode(6), new TreeNode(7))), new TreeNode(3, new TreeNode(5, null, new TreeNode(8))));

test.each<{ tree: TreeNode | null; expected: number[][] }>([
  { tree: tree1, expected: [] },
  { tree: tree2, expected: [[1]] },
  { tree: tree3, expected: [[1],[2,3],[4,5]] },
  { tree: tree4, expected: [[1],[2,3],[4,5]] },
  { tree: tree5, expected: [[1],[2,3],[4,5,6,7],[8]] },
  { tree: tree6, expected: [[3],[9,20],[15,7]] },
  { tree: tree7, expected: [[1],[2,3],[4,5],[6,7,8]] },
])('binary tree level order traversal', ({ tree, expected }) => {
  expect(levelOrder(tree)).toEqual(expected);
});