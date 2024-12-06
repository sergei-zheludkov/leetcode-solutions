import { addTwoNumbers } from './add-two-numbers';
import { createSinglyLinkedList } from '../helpers/create-singly-linked-list';

test.each([
  { nodes1: [9], nodes2: [], expected: [9] },
  { nodes1: [], nodes2: [9], expected: [9] },
  { nodes1: [0], nodes2: [0], expected: [0] },
  { nodes1: [9], nodes2: [9], expected: [8,1] },
  { nodes1: [2,4,3], nodes2: [5,6,4], expected: [7,0,8] },
  { nodes1: [9,9,9,9,9,9,9], nodes2: [1], expected: [0,0,0,0,0,0,0,1] },
  { nodes1: [9,9,9,9,9,9,9], nodes2: [9,9,9,9], expected: [8,9,9,9,0,0,0,1] },
])('add two numbers', ({ nodes1, nodes2, expected }) => {
  const first = createSinglyLinkedList(nodes1);
  const second = createSinglyLinkedList(nodes2);
  const result = createSinglyLinkedList(expected);

  expect(addTwoNumbers(first, second)).toEqual(result);
});
