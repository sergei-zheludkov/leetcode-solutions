import { getArrayFromList } from '../helpers/get-array-from-list';
import { createLinkedList } from '../helpers/create-linked-list';
import { middleNode } from './middle-of-the-linked-list';


test('middle of the linked list', () => {
  expect(middleNode(null)).toBeNull();

  const list1 = createLinkedList([1]);
  expect(getArrayFromList(middleNode(list1))).toEqual([1]);

  const list2 = createLinkedList([1,2,3,4,5]);
  expect(getArrayFromList(middleNode(list2))).toEqual([3,4,5]);

  const list3 = createLinkedList([1,2,3,4,5,6]);
  expect(getArrayFromList(middleNode(list3))).toEqual([4,5,6]);
});
