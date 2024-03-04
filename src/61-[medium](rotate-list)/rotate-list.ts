import { ListNode } from '../models/list-node';
import { getArrayFromList } from '../helpers/get-array-from-list';
import { createLinkedList } from '../helpers/create-linked-list';

export const rotateRight = (head: ListNode | null, k: number): ListNode | null => {
  if (!head) {
    return head;
  }

  const array = getArrayFromList(head);
  
  while (k) {
    const last = array.pop() ?? NaN;
    array.unshift(last);
    k--;
  }
  
  return createLinkedList(array);
};
