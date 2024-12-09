/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createDoublyLinkedList } from '../helpers/create-doubly-linked-list';
import { flatten } from './flatten-a-multilevel-doubly-linked-list';

const test1_list1 = createDoublyLinkedList([1,2,3,4,5,6]);
const test1_list2 = createDoublyLinkedList([7,8,9,10]);
const test1_list3 = createDoublyLinkedList([11,12]);
const test1_expected = createDoublyLinkedList([1,2,3,7,8,11,12,9,10,4,5,6]);

if (test1_list2?.next) {
  // @ts-ignore
  test1_list2.next.child = test1_list3;
}

if (test1_list1?.next?.next) {
  // @ts-ignore
  test1_list1.next.next.child = test1_list2;
}

const test2_list1 = createDoublyLinkedList([1,2]);
const test2_list2 = createDoublyLinkedList([3]);
const test2_expected = createDoublyLinkedList([1,3,2]);

if (test2_list1) {
  test2_list1.child = test2_list2;
}

const test3_list1 = createDoublyLinkedList([1]);
const test3_list2 = createDoublyLinkedList([2]);
const test3_list3 = createDoublyLinkedList([3]);
const test3_expected = createDoublyLinkedList([1,2,3]);

if (test3_list1) {
  test3_list1.child = test3_list2;
}

if (test3_list2) {
  test3_list2.child = test3_list3;
}

const test4_list1 = createDoublyLinkedList([1,2,3,4,5,6]);
const test4_list2 = createDoublyLinkedList([7,8]);
const test4_list3 = createDoublyLinkedList([11,12]);
const test4_expected = createDoublyLinkedList([1,2,3,7,8,11,12,4,5,6]);

if (test4_list2?.next) {
  // @ts-ignore
  test4_list2.next.child = test4_list3;
}

if (test4_list1?.next?.next) {
  // @ts-ignore
  test4_list1.next.next.child = test4_list2;
}


test.each([
  { list: test1_list1, expected: test1_expected },
  { list: test2_list1, expected: test2_expected },
  { list: test3_list1, expected: test3_expected },
  { list: test4_list1, expected: test4_expected },
])('flatten a multilevel doubly linked list', ({ list, expected }) => {
  const result = flatten(list);

  expect(result).toEqual(expected);
});
