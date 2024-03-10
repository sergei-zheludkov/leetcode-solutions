import { reverseList } from './reverse-linked-list';
import { createLinkedList } from '../helpers/create-linked-list';

test.each([
  {
    nodes: [1],
    expected: [1],
  },
  {
    nodes: [1,2],
    expected: [2,1],
  },
  {
    nodes: [1,2,3,4,5,6],
    expected: [6,5,4,3,2,1],
  },
  {
    nodes: [-15,2,-10,-7,-1,0,1,2,4],
    expected: [4,2,1,0,-1,-7,-10,2,-15],
  },
])('reverse linked list', ({ nodes, expected }) => {
  const list = createLinkedList(nodes);
  const result = createLinkedList(expected);

  expect(reverseList(list)).toEqual(result);
});
