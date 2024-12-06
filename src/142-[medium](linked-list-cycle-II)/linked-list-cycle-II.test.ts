import { detectCycle } from './linked-list-cycle-II';
import { createLinkedList } from '../helpers/create-linked-list';

test.each([
  { nodes: [1,4,5] },
  { nodes: [1,3,4] },
  { nodes: [2] },
])('linked list cycle II', ({ nodes }) => {
  const list = createLinkedList(nodes);

  expect(detectCycle(list)).toBeNull();
});
