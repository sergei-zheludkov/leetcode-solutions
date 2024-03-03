import { getArrayFromList } from '../helpers/get-array-from-list';
import { createLinkedList } from '../helpers/create-linked-list';
import { deleteNode } from './delete-node-in-a-linked-list';

const list1 = createLinkedList([1,2,3,4,5]);
const list2 = createLinkedList([1,2,3,4,5]);

test('delete node in a linked list', () => {
  deleteNode(list1?.next?.next ?? null);
  expect(getArrayFromList(list1)).toEqual([1,2,4,5]);

  deleteNode(list2?.next?.next?.next ?? null);
  expect(getArrayFromList(list2)).toEqual([1,2,3,5]);
});
