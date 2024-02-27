import { ListNode } from '../models/list-node';
import { getListLength } from '../helpers/get-list-length';

export const removeNthFromEnd = (head: ListNode | null, removeElemNum: number): ListNode | null => {
  if (!head) {
    return head;
  }

  if (getListLength(head) === removeElemNum) {
    return head.next;
  }

  head.next = removeNthFromEnd(head.next, removeElemNum);

  return head;
};
