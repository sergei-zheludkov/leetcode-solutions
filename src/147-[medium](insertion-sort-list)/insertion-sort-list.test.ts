import { createLinkedList } from '../helpers/create-linked-list';
import { insertionSortList } from './insertion-sort-list';

test.each([
  {
    nodes: [4,2,1,3],
    expected: [1,2,3,4],
  },
  {
    nodes: [-1,5,3,4,0],
    expected: [-1,0,3,4,5],
  },
  {
    nodes: [-10, 1000, -100, 10, -1000, -10000, 1, 100, 0],
    expected: [-10000, -1000, -100, -10, 0, 1, 10, 100, 1000],
  },
])('insertion sort list', ({ nodes, expected }) => {
  const list = createLinkedList(nodes);
  const result = createLinkedList(expected);

  expect(insertionSortList(list)).toEqual(result);
});
