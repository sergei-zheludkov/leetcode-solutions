import { createSinglyLinkedList as createLinkedList } from '../helpers/create-singly-linked-list';
import { oddEvenList } from './odd-even-linked-list';

test.each([
  { nodes: [1,2,3,4,5], expected: [1,3,5,2,4] },
  { nodes: [2,1,3,5,6,4,7], expected: [2,3,6,7,1,5,4] },
  { nodes: [1,2,3,4,5,6,7,8,9,10], expected: [1,3,5,7,9,2,4,6,8,10] },
])('odd even linked list', ({ nodes, expected }) => {
  const list = createLinkedList(nodes);
  const result = createLinkedList(expected);

  expect(oddEvenList(list)).toEqual(result);
});


