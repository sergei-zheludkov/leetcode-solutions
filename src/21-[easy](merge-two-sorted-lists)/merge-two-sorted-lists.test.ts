import { getArrayFromSinglyList } from '../helpers/get-array-from-singly-list';
import { createSinglyLinkedList } from '../helpers/create-singly-linked-list';
import { mergeTwoLists } from './merge-two-sorted-lists';

const test1_list1 = createSinglyLinkedList([1,2,4]);
const test1_list2 = createSinglyLinkedList([1,3,4]);

const test2_list1 = createSinglyLinkedList([1,2,2,2,4]);
const test2_list2 = createSinglyLinkedList([1,2,3,4,4]);

const test3_list1 = createSinglyLinkedList([-15,-10,-7,-1,0,1,2,4]);
const test3_list2 = createSinglyLinkedList([-10,-3,0,1,2,7]);

const test4_list1 = createSinglyLinkedList([0]);
const test4_list2 = createSinglyLinkedList([0]);

describe('merge two sorted lists', () => {
  test('merge lists cases', () => {
    const result1 = mergeTwoLists(test1_list1, test1_list2);
    expect(getArrayFromSinglyList(result1)).toEqual([1,1,2,3,4,4]);

    const result2 = mergeTwoLists(test2_list1, test2_list2);
    expect(getArrayFromSinglyList(result2)).toEqual([1,1,2,2,2,2,3,4,4,4]);

    const result3 = mergeTwoLists(test3_list1, test3_list2);
    expect(getArrayFromSinglyList(result3)).toEqual([-15, -10, -10, -7, -3, -1, 0, 0, 1, 1, 2, 2, 4, 7]);
  });

  test('empty cases', () => {
    const result4 = mergeTwoLists(test4_list1, test4_list2);
    expect(getArrayFromSinglyList(result4)).toEqual([0, 0]);

    const result7 = mergeTwoLists(null, null);
    expect(result7).toBeNull();
  });
});
