import { getArrayFromList } from '../helpers/get-array-from-list';
import { createLinkedList } from '../helpers/create-linked-list';
import { rotateRight } from './rotate-list';

test.each([
  {
    list: createLinkedList([1,2,3,4,5]),
    k: 2,
    expected: [4,5,1,2,3],
  },
  {
    list: createLinkedList([0,1,2]),
    k: 4,
    expected: [2,0,1],
  },
])('rotate list', ({ list, k, expected }) => {
  expect(getArrayFromList(rotateRight(list, k))).toEqual(expected);
});
