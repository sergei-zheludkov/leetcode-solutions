import { hasCycle } from './linked-list-cycle';
import { createLinkedList } from '../helpers/create-linked-list';

const list1 = createLinkedList([1,4,5]);
const list2 = createLinkedList([1,3,4]);
const list3 = createLinkedList([2]);

describe('linked list cycle', () => {
  // test('truthy cases', () => {});

  test.each([list1, list2, list3])('falsy cases', (list) => {
    expect(hasCycle(list)).toBeFalsy();
  });
});
