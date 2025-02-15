import { SinglyListNode as ListNode } from '../models/singly-list-node';
import { getArrayFromSinglyList } from '../helpers/get-array-from-singly-list';
import { reverseKGroup } from './reverse-nodes-in-k-group';

const test1_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const test2_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
const test3_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));

test('reverse nodes in k group', () => {
  const test1 = getArrayFromSinglyList(reverseKGroup(test1_list, 2));

  expect(test1).toEqual([2,1,4,3,5]);

  const test2 = getArrayFromSinglyList(reverseKGroup(test2_list, 2));

  expect(test2).toEqual([2,1,4,3,6,5]);

  const test3 = getArrayFromSinglyList(reverseKGroup(test3_list, 3));

  expect(test3).toEqual([3,2,1,6,5,4]);
});
