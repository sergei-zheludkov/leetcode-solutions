import { getArrayFromSinglyList } from '../helpers/get-array-from-singly-list';
import { createSinglyLinkedList } from '../helpers/create-singly-linked-list';
import { deleteNode } from './delete-node-in-a-linked-list';

const list1 = createSinglyLinkedList([1,2,3,4,5]);
const list2 = createSinglyLinkedList([1,2,3,4,5]);

test('delete node in a linked list', () => {
  deleteNode(list1?.next?.next ?? null);
  expect(getArrayFromSinglyList(list1)).toEqual([1,2,4,5]);

  deleteNode(list2?.next?.next?.next ?? null);
  expect(getArrayFromSinglyList(list2)).toEqual([1,2,3,5]);
});
