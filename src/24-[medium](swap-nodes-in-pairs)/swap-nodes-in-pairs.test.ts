import { SinglyListNode as ListNode } from '../models/singly-list-node';
import { getArrayFromSinglyList } from '../helpers/get-array-from-singly-list';
import { swapPairs } from './swap-nodes-in-pairs';

const test1_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
const test2_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const test3_list = new ListNode(1);
const test4_list = null;

test('swap nodes in pairs', () => {
  const test1 = getArrayFromSinglyList(swapPairs(test1_list));

  expect(test1).toEqual([2,1,4,3]);

  const test2 = getArrayFromSinglyList(swapPairs(test2_list));

  expect(test2).toEqual([2,1,4,3,5]);

  const test3 = getArrayFromSinglyList(swapPairs(test3_list));

  expect(test3).toEqual([1]);

  const test4 = getArrayFromSinglyList(swapPairs(test4_list));

  expect(test4).toEqual([]);
});
