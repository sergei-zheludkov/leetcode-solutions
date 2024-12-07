import { createSinglyLinkedList } from '../helpers/create-singly-linked-list';
import { getArrayFromSinglyList } from '../helpers/get-array-from-singly-list';
import { insertGreatestCommonDivisors } from './insert-greatest-common-divisors-in-linked-list';

test.each([
  { nodes: [7], expected: [7] },
  { nodes: [18,6,10,3], expected: [18,6,6,2,10,1,3] },
  { nodes: [7,214,143,75,90,40], expected: [7,1,214,1,143,1,75,15,90,10,40] },
])('insert greatest common divisors in linked list', ({ nodes, expected }) => {
  const result = insertGreatestCommonDivisors(createSinglyLinkedList(nodes));

  expect(getArrayFromSinglyList(result)).toStrictEqual(expected);
});
