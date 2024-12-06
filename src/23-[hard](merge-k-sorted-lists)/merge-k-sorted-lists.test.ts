import { SinglyListNode as ListNode } from '../models/singly-list-node';
import { getArrayFromSinglyList } from '../helpers/get-array-from-singly-list';
import { mergeKLists } from './merge-k-sorted-lists';

const test1_list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const test1_list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const test1_list3 = new ListNode(2, new ListNode(6));

describe('merge k sorted lists', () => {
  test('merge lists cases', () => {
    const test = getArrayFromSinglyList(mergeKLists([test1_list1, test1_list2, test1_list3]));

    expect(test).toEqual([1,1,2,3,4,4,5,6]);
  });

  test('empty cases', () => {
    const test1 = getArrayFromSinglyList(mergeKLists([]));
    expect(test1).toEqual([]);

    const test2 = getArrayFromSinglyList(mergeKLists([new ListNode()]));
    expect(test2).toEqual([0]);
  });
});
