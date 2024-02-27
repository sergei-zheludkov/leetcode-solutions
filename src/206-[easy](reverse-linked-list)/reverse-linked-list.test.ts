import { ListNode } from '../models/list-node';
import { getArrayFromList } from '../helpers/get-array-from-list';
import { reverseList } from './reverse-linked-list';

const test1_list = new ListNode(1);
const test2_list = new ListNode(1, new ListNode(2));
const test3_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
const test4_list = new ListNode(-15, new ListNode(2, new ListNode(-10, new ListNode(-7, new ListNode(-1, new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(4)))))))));

test('reverse linked list', () => {
  expect(getArrayFromList(reverseList(test1_list))).toEqual([1]);
  expect(getArrayFromList(reverseList(test2_list))).toEqual([2,1]);
  expect(getArrayFromList(reverseList(test3_list))).toEqual([6,5,4,3,2,1]);
  expect(getArrayFromList(reverseList(test4_list))).toEqual([4,2,1,0,-1,-7,-10,2,-15]);
});
