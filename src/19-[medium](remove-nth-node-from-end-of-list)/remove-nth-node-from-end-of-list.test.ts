import { getArrayFromList } from '../helpers/get-array-from-list';
import { createLinkedList } from '../helpers/create-linked-list';
import { removeNthFromEnd } from './remove-nth-node-from-end-of-list';

test('remove nth node from end of list', () => {
  const list1 = createLinkedList([1]);
  expect(getArrayFromList(removeNthFromEnd(list1, 1))).toEqual([]);

  const list2 =  createLinkedList([1,2]);
  expect(getArrayFromList(removeNthFromEnd(list2, 1))).toEqual([1]);

  const list3 = createLinkedList([1,2,3,4,5]);
  expect(getArrayFromList(removeNthFromEnd(list3, 2))).toEqual([1,2,3,5]);
});
