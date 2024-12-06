import { getArrayFromSinglyList } from '../helpers/get-array-from-singly-list';
import { SinglyListNode as ListNode } from '../models/singly-list-node';

export const pairSum = (head: ListNode | null): number => {
  const stack = getArrayFromSinglyList(head);

  let max = -Infinity;

  for (let i = 0, j = stack.length - 1; i < j; i++, j--) {
    max = Math.max(max, stack[i] + stack[j]);
  }

  return max;
};
