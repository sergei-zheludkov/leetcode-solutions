import { ListNode } from '../models/list-node';

export const isPalindrome = (head: ListNode | null): boolean => {
  const values: number[] = [];

  while (head) {
    values.push(head.val);

    head = head.next;
  }

  let i = 0, j = values.length - 1;

  while (i < j) {
    if (values[i] !== values[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};
