import { SinglyListNode as ListNode } from '../models/singly-list-node';
import { getArrayFromSinglyList } from '../helpers/get-array-from-singly-list';
import { deleteDuplicates } from './remove-duplicates-from-sorted-list';

const test1_list = new ListNode(1, new ListNode(1, new ListNode(2)));
const test2_list = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
const test3_list = new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))));
const test4_list = new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(3))))))))));
const test5_list = new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0))))))))));
const test6_list = new ListNode();
const test7_list = null;

test('remove duplicates from sorted list', () => {
  expect(getArrayFromSinglyList(deleteDuplicates(test1_list))).toEqual( [1,2]);
  expect(getArrayFromSinglyList(deleteDuplicates(test2_list))).toEqual( [1,2,3]);
  expect(getArrayFromSinglyList(deleteDuplicates(test3_list))).toEqual( [1,2,3]);
  expect(getArrayFromSinglyList(deleteDuplicates(test4_list))).toEqual( [1,2,3]);
  expect(getArrayFromSinglyList(deleteDuplicates(test5_list))).toEqual( [0]);
  expect(getArrayFromSinglyList(deleteDuplicates(test6_list))).toEqual( [0]);
  expect(deleteDuplicates(test7_list)).toBeNull();
});
