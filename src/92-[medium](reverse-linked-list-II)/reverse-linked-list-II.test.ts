import { createSinglyLinkedList } from '../helpers/create-singly-linked-list';
import { reverseBetween } from './reverse-linked-list-II';

describe('reverse linked list II', () => {
  test('short list', () => {
    const list = createSinglyLinkedList([5]);
    const expected = createSinglyLinkedList([5]);

    expect(reverseBetween(list, 1, 1)).toEqual(expected);
  });

  test('middle list', () => {
    const list = createSinglyLinkedList([1,2,3,4,5]);
    const expected = createSinglyLinkedList([1,4,3,2,5]);

    expect(reverseBetween(list, 2, 4)).toEqual(expected);
  });

  test('long list 1', () => {
    const list = createSinglyLinkedList([10,20,30,40,50,60,70,80,90,100]);
    const expected = createSinglyLinkedList([10,20,30,40,90,80,70,60,50,100]);

    expect(reverseBetween(list, 5, 9)).toEqual(expected);
  });

  test('long list 2', () => {
    const list = createSinglyLinkedList([1,20,300,4_000,50_000,600_000,7_000_000,80_000_000,900_000_000,1_000_000_000]);
    const expected = createSinglyLinkedList([1_000_000_000, 900_000_000, 80_000_000, 7_000_000, 600_000, 50_000, 4_000, 300, 20, 1]);

    expect(reverseBetween(list, 1, 10)).toEqual(expected);
  });
});

