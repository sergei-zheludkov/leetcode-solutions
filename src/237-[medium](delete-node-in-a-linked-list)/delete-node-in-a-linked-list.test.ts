import { ListNode } from '../models/list-node';
import { getArrayFromList } from '../helpers/get-array-from-list';
import { deleteNode } from './delete-node-in-a-linked-list';

const test1_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const test2_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

test('delete node in a linked list', () => {
  deleteNode(test1_list.next?.next ?? null);
  expect(getArrayFromList(test1_list)).toEqual([1,2,4,5]);

  deleteNode(test2_list.next?.next?.next ?? null);
  expect(getArrayFromList(test2_list)).toEqual([1,2,3,5]);
});
