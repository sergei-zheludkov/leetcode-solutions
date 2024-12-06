import { SinglyListNode as ListNode } from '../models/singly-list-node';

export const getListLength = (head: ListNode | null): number => {
  if (!head) {
    return 0;
  }

  return 1 + getListLength(head.next);
};
