import { countNodes } from './count-complete-tree-nodes';
import { createBinaryTree } from '../helpers/create-binary-tree';

test.each([
  { nodes: [], expected: 0 },
  { nodes: [1], expected: 1 },
  { nodes: [1,2,3,4,5,6], expected: 6 },
  { nodes: [1,2,3,4,5,6,7,8], expected: 8 },
  { nodes: [1,2,3,4,5,6,7,8,9,10], expected: 10 },
])('count complete tree nodes', ({ nodes, expected }) => {
  const tree = createBinaryTree(nodes);

  expect(countNodes(tree)).toBe(expected);
});
