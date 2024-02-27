import { ListNode } from '../models/list-node';
import { getArrayFromList } from '../helpers/get-array-from-list';
import { middleNode } from './middle-of-the-linked-list';

const test1_list = new ListNode(1);
const test2_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const test3_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));

test('middle of the linked list', () => {
  expect(middleNode(null)).toBeNull();
  expect(getArrayFromList(middleNode(test1_list))).toEqual([1]);
  expect(getArrayFromList(middleNode(test2_list))).toEqual([3,4,5]);
  expect(getArrayFromList(middleNode(test3_list))).toEqual([4,5,6]);
});
