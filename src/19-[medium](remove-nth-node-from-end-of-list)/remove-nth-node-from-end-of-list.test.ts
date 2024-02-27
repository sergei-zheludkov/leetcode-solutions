import { ListNode } from '../models/list-node';
import { getArrayFromList } from '../helpers/get-array-from-list';
import { removeNthFromEnd } from './remove-nth-node-from-end-of-list';

// TODO createList function

const test1_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const test2_list = new ListNode(1);
const test3_list = new ListNode(1, new ListNode(2,));

test('remove nth node from end of list', () => {
  expect(getArrayFromList(removeNthFromEnd(test1_list, 2))).toEqual([1,2,3,5]);
  expect(getArrayFromList(removeNthFromEnd(test2_list, 1))).toEqual([]);
  expect(getArrayFromList(removeNthFromEnd(test3_list, 1))).toEqual([1]);
});
