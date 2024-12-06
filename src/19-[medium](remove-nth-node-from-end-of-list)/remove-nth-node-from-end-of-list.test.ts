import { createSinglyLinkedList } from '../helpers/create-singly-linked-list';
import { removeNthFromEnd } from './remove-nth-node-from-end-of-list';

test.each([
  { nodes: [1], num: 1, expected: [] },
  { nodes: [1,2], num: 1, expected: [1] },
  { nodes: [1,2,3,4,5], num: 2, expected: [1,2,3,5] },
])('remove nth node from end of list', ({ nodes, num, expected }) => {
  const list1 = createSinglyLinkedList(nodes);
  const expected1 = createSinglyLinkedList(expected);
  expect(removeNthFromEnd(list1, num)).toEqual(expected1);
});
