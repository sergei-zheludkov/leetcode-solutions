import { isPalindrome } from './palindrome-linked-list';
import { createLinkedList } from '../helpers/create-linked-list';

describe('palindrome linked list', () => {
  test.each([
    [1],
    [2,2],
    [1,2,2,1],
    [1,2,3,2,1],
    [1,2,3,3,2,1],
  ].map(createLinkedList))('truthy cases', (list) => {
    expect(isPalindrome(list)).toBeTruthy();
  });

  test.each([
    [1,2],
    [2,2,5],
    [1,2,3,4,5,6],
  ].map(createLinkedList))('falsy cases', (list) => {
    expect(isPalindrome(list)).toBeFalsy();
  });
});
