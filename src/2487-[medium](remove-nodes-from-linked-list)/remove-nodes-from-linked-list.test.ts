import { createLinkedList } from '../helpers/create-linked-list';
import { getArrayFromList } from '../helpers/get-array-from-list';
import { removeNodes } from './remove-nodes-from-linked-list';

test.each([
  { nodes: [1], expected: [1] },
  { nodes: [1,2,3,4,5], expected: [5] },
  { nodes: [5,2,13,3,8], expected: [13,8] },
  { nodes: [1,1,1,1], expected: [1,1,1,1] },
  { nodes: [5,4,3,2,1], expected: [5,4,3,2,1] },
  { nodes: [2,5,10,9,4,5], expected: [10,9,5] },
])('remove nodes from linked list', ({ nodes, expected }) => {
  const result = removeNodes(createLinkedList(nodes));
  
  expect(getArrayFromList(result)).toEqual(expected);
});
