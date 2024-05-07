import { createLinkedList } from '../helpers/create-linked-list';
import { doubleIt } from './double-a-number-represented-as-a-linked-list';

test.each([
  { nodes: [0], expected: [0] },
  { nodes: [1,8,9], expected: [3,7,8] },
  { nodes: [9,9,9], expected: [1,9,9,8] },
])('double a number represented as a linked list', ({ nodes, expected }) => {
  expect(doubleIt(createLinkedList(nodes))).toEqual(createLinkedList(expected));
});
