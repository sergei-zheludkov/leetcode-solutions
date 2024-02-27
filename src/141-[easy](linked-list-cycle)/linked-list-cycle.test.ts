import { ListNode } from '../models/list-node';
import { hasCycle } from './linked-list-cycle';

const test1_list = new ListNode(1, new ListNode(4, new ListNode(5)));
const test2_list = new ListNode(1, new ListNode(3, new ListNode(4)));
const test3_list = new ListNode(2, new ListNode(6));

describe('linked list cycle', () => {
  // test('truthy cases', () => {});

  test('falsy cases', () => {
    expect(hasCycle(test1_list)).toBeFalsy();
    expect(hasCycle(test2_list)).toBeFalsy();
    expect(hasCycle(test3_list)).toBeFalsy();
  });
});
