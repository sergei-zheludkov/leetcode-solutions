import { createSinglyLinkedList } from '../helpers/create-doubly-linked-list';
import { toArray } from './convert-doubly-linked-list-to-array-I';

test.each([
  { nodes: [1,2,3,4,3,2,1] },
  { nodes: [1,1,2,3,4,4,5,5] },
  { nodes: [2,2,2,2,2] },
  { nodes: [3,2,3,2,3,2] },
])('convert doubly linked list to array I', ({ nodes }) => {
  const list = createSinglyLinkedList(nodes);

  expect(toArray(list)).toEqual(nodes);
});
