import { getArrayFromList } from '../helpers/get-array-from-list';
import { ListNode } from '../models/list-node';

export const pairSum = (head: ListNode | null): number => {
  const stack = getArrayFromList(head);

  let max = -Infinity;

  for (let i = 0, j = stack.length - 1; i < j; i++, j--) {
    max = Math.max(max, stack[i] + stack[j]);
  }

  return max;
};
