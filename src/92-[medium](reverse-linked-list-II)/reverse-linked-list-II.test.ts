import { getArrayFromList } from '../helpers/get-array-from-list';
import { createLinkedList } from '../helpers/create-linked-list';
import { reverseBetween } from './reverse-linked-list-II';

const list1 = createLinkedList([5]);
const list2 = createLinkedList([1,2,3,4,5]);
const list3 = createLinkedList([10,20,30,40,50,60,70,80,90,100]);
const list4 = createLinkedList([1,20,300,4_000,50_000,600_000,7_000_000,80_000_000,900_000_000,1_000_000_000]);

describe('reverse linked list II', () => {
  test('short list', () => {
    const result = reverseBetween(list1, 1, 1);

    expect(getArrayFromList(result)).toEqual([5]);
  });

  test('middle list', () => {
    const result = reverseBetween(list2, 2, 4);

    expect(getArrayFromList(result)).toEqual([1,4,3,2,5]);
  });

  test('long list 1', () => {
    const result = reverseBetween(list3, 5, 9);

    expect(getArrayFromList(result)).toEqual([10,20,30,40,90,80,70,60,50,100]);
  });

  test('long list 2', () => {
    const result = reverseBetween(list4, 1, 10);

    expect(getArrayFromList(result)).toEqual([1_000_000_000, 900_000_000, 80_000_000, 7_000_000, 600_000, 50_000, 4_000, 300, 20, 1]);
  });
});

