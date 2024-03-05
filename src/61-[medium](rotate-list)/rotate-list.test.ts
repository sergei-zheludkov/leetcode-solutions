import { createLinkedList } from '../helpers/create-linked-list';
import { rotateRight } from './rotate-list';

test.each([
  {
    nodes: [1],
    k: 0,
    expected: [1],
  },
  {
    nodes: [1,2],
    k: 0,
    expected: [1,2],
  },
  {
    nodes: [1,2],
    k: 2,
    expected: [1,2],
  },
  {
    nodes: [1,2,3,4,5],
    k: 2,
    expected: [4,5,1,2,3],
  },
  {
    nodes: [0,1,2],
    k: 4,
    expected: [2,0,1],
  },
  {
    nodes: [1,2,3],
    k: 2000000000,
    expected: [2,3,1],
  },
])('rotate list', ({ nodes, k, expected }) => {
  const list = createLinkedList(nodes);

  expect(rotateRight(list, k)).toEqual(createLinkedList(expected));
});
