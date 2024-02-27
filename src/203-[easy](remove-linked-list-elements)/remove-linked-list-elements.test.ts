import { ListNode } from '../models/list-node';
import { getArrayFromList } from '../helpers/get-array-from-list';
import { removeElements } from './remove-linked-list-elements';

const test1_list = new ListNode(1);
const test2_list = new ListNode(1, new ListNode(2));
const test3_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
const test4_list = new ListNode(-15, new ListNode(2, new ListNode(-10, new ListNode(-7, new ListNode(-1, new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(4)))))))));

test('remove linked list elements', () => {
  expect(removeElements(test1_list, 1)).toBeNull();
  expect(getArrayFromList(removeElements(test2_list, 2))).toEqual([1]);
  expect(getArrayFromList(removeElements(test3_list, 6))).toEqual([1,2,3,4,5]);
  expect(getArrayFromList(removeElements(test4_list, 2))).toEqual([-15,-10,-7,-1,0,1,4]);
});
