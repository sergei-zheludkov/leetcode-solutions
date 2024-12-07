import { getArrayFromSinglyList } from '../helpers/get-array-from-singly-list';
import { createSinglyLinkedList } from '../helpers/create-singly-linked-list';
import { swapNodes } from './swapping-nodes-in-a-linked-list';

test.each([
  {
    list: createSinglyLinkedList([1,2,3,4,5]),
    k: 2,
    expected: [1,4,3,2,5],
  },
  {
    list: createSinglyLinkedList([7,9,6,6,7,8,3,0,9,5]),
    k: 5,
    expected: [7,9,6,6,8,7,3,0,9,5],
  },
])('swapping nodes in a linked list', ({ list, k, expected }) => {
  expect(getArrayFromSinglyList(swapNodes(list, k))).toEqual(expected);
});
