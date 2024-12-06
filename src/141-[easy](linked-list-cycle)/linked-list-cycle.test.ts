import { hasCycle } from './linked-list-cycle';
import { createSinglyLinkedList } from '../helpers/create-singly-linked-list';

describe('linked list cycle', () => {
  // test('truthy cases', () => {});

  test.each([
    { nodes: [1,4,5] },
    { nodes: [1,3,4] },
    { nodes: [2] },
  ])('falsy cases', ({ nodes }) => {
    const list = createSinglyLinkedList(nodes);

    expect(hasCycle(list)).toBeFalsy();
  });
});
