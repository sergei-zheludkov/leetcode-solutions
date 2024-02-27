import { getIntersectionNode } from './intersection-of-two-linked-lists';
import { ListNode } from '../models/list-node';

const test1_intersect = new ListNode(8, new ListNode(4, new ListNode(5)));
const test1_listA = new ListNode(4, new ListNode(1, test1_intersect));
const test1_listB = new ListNode(5, new ListNode(6, new ListNode(1, test1_intersect)));

const test2_intersect = new ListNode(2, new ListNode(4));
const test2_listA = new ListNode(1, new ListNode(9, new ListNode(1, test2_intersect)));
const test2_listB = new ListNode(3, test2_intersect);

const test3_listA = new ListNode(2, new ListNode(6, new ListNode(4)));
const test3_listB = new ListNode(1, new ListNode(5));

test('intersection of two linked lists', () => {
  expect(getIntersectionNode(test1_listA, test1_listB)?.val).toBe(8);
  expect(getIntersectionNode(test2_listA, test2_listB)?.val).toBe(2);
  expect(getIntersectionNode(test3_listA, test3_listB)).toBeNull();
});