import { ListNode } from '../models/list-node';
import { getListLength } from '../helpers/get-list-length';
import { concatLists } from '../helpers/concat-lists';

// Not the best solution, TODO: try to find better in the future
export const reverseKGroup = (head: ListNode | null, length: number): ListNode | null => {
  if (!head) {
    return head;
  }

  const array: ListNode[] = [];
  let step = length;
  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current && getListLength(current) >= step) {
    const newCurrent: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = newCurrent;

    step -= 1;

    if (step === 0) {
      array.push(prev);
      prev = null;
      step = length;
    }
  }

  if (current) {
    array.push(current);
  }

  const [first, ...rest] = array;

  return rest.reduce(concatLists, first);
};

