import { getArrayFromSinglyList } from '../helpers/get-array-from-singly-list';
import { createSinglyLinkedList } from '../helpers/create-singly-linked-list';
import { removeElements } from './remove-linked-list-elements';

const list1 = createSinglyLinkedList([1]);
const list2 = createSinglyLinkedList([1,2]);
const list3 = createSinglyLinkedList([1,2,3,4,5,6]);
const list4 = createSinglyLinkedList([-15,2,-10,-7,-1,0,1,2,4]);

test('remove linked list elements', () => {
  const result1 = removeElements(list1, 1);
  expect(result1).toBeNull();

  const result2 = removeElements(list2, 2);
  expect(getArrayFromSinglyList(result2)).toEqual([1]);

  const result3 = removeElements(list3, 6);
  expect(getArrayFromSinglyList(result3)).toEqual([1,2,3,4,5]);

  const result4 = removeElements(list4, 2);
  expect(getArrayFromSinglyList(result4)).toEqual([-15,-10,-7,-1,0,1,4]);
});
