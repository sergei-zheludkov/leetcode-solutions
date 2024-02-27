import { ListNode } from '../models/list-node';
import { getArrayFromList } from '../helpers/get-array-from-list';
import { mergeTwoLists } from './merge-two-sorted-lists';

const test1_list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const test1_list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const test2_list1 = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(2, new ListNode(4)))));
const test2_list2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))));

const test3_list1 = new ListNode(-15, new ListNode(-10, new ListNode(-7, new ListNode(-1, new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(4))))))));
const test3_list2 = new ListNode(-10, new ListNode(-3, new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(7))))));

const test4_list1 = new ListNode();
const test4_list2 = new ListNode();

const test5_list1 = new ListNode();
const test5_list2 = new ListNode(0);

const test6_list1 = new ListNode(0);
const test6_list2 = new ListNode();


describe('merge two sorted lists', () => {
  test('merge lists cases', () => {
    const test1 = getArrayFromList(mergeTwoLists(test1_list1, test1_list2));
    expect(test1).toEqual([1,1,2,3,4,4]);

    const test2 = getArrayFromList(mergeTwoLists(test2_list1, test2_list2));
    expect(test2).toEqual([1,1,2,2,2,2,3,4,4,4]);

    const test3 = getArrayFromList(mergeTwoLists(test3_list1, test3_list2));
    expect(test3).toEqual([-15, -10, -10, -7, -3, -1, 0, 0, 1, 1, 2, 2, 4, 7]);
  });

  test('empty cases', () => {
    const test4 = getArrayFromList(mergeTwoLists(test4_list1, test4_list2));
    expect(test4).toEqual([0, 0]);

    const test5 = getArrayFromList(mergeTwoLists(test5_list1, test5_list2));
    expect(test5).toEqual([0, 0]);

    const test6 = getArrayFromList(mergeTwoLists(test6_list1, test6_list2));
    expect(test6).toEqual([0, 0]);

    const test7 = mergeTwoLists(null, null);
    expect(test7).toBeNull();
  });
});
