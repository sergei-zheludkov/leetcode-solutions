import { createLinkedList } from '../helpers/create-linked-list';
import { modifiedList } from './delete-nodes-from-linked-list-present-in-array';

test.each([
  { nodes: [1,2,3,4,5], nums: [1,2,3], expected: [4,5] },
  { nodes: [1,2,1,2,1,2], nums: [1], expected: [2,2,2] },
  { nodes: [1,2,3,4], nums: [5], expected: [1,2,3,4] },
  { nodes: [2,10,9], nums: [9,2,5], expected: [10] },
])('delete nodes from linked list present in array', ({ nodes, nums, expected }) => {
  expect(modifiedList(nums, createLinkedList(nodes))).toEqual(createLinkedList(expected));
});
