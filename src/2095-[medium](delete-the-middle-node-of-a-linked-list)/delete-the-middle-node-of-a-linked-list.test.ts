import { createSinglyLinkedList } from '../helpers/create-singly-linked-list';
import { deleteMiddle } from './delete-the-middle-node-of-a-linked-list';

test.each([
  { nodes: [1], expected: null },
  { nodes: [2,1], expected: [2] },
  { nodes: [1,2,3,4], expected: [1,2,4] },
  { nodes: [1,3,4,7,1,2,6], expected: [1,3,4,1,2,6] },
])('delete the middle node of a linked list', ({ nodes, expected }) => {
  const list = createSinglyLinkedList(nodes);

  expect(deleteMiddle(list)).toEqual(createSinglyLinkedList(expected));
});
