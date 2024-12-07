import { getArrayFromSinglyList } from '../helpers/get-array-from-singly-list';
import { createSinglyLinkedList } from '../helpers/create-singly-linked-list';
import { middleNode } from './middle-of-the-linked-list';


test('middle of the linked list', () => {
  expect(middleNode(null)).toBeNull();

  const list1 = createSinglyLinkedList([1]);
  expect(getArrayFromSinglyList(middleNode(list1))).toEqual([1]);

  const list2 = createSinglyLinkedList([1,2,3,4,5]);
  expect(getArrayFromSinglyList(middleNode(list2))).toEqual([3,4,5]);

  const list3 = createSinglyLinkedList([1,2,3,4,5,6]);
  expect(getArrayFromSinglyList(middleNode(list3))).toEqual([4,5,6]);
});
