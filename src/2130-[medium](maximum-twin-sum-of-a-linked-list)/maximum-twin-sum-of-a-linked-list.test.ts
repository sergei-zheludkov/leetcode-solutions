import { createLinkedList } from '../helpers/create-linked-list';
import { pairSum } from './maximum-twin-sum-of-a-linked-list';

test.each([
  { nodes: [1,2], expected: 3 },
  { nodes: [5,4,2,1], expected: 6 },
  { nodes: [4,2,2,3], expected: 7 },
  { nodes: [1,100_000,29,43,229,20], expected: 100_229 },
])('maximum twin sum of a linked list', ({ nodes, expected }) => {
  const list = createLinkedList(nodes);

  expect(pairSum(list)).toBe(expected);
});
