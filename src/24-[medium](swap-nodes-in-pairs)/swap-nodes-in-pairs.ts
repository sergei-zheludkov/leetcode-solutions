import { ListNode } from '../models/list-node';

export const swapPairs = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) {
    return head;
  }

  const currentHead: ListNode = { ...head, next: swapPairs(head.next.next) };

  head = head.next;
  head.next = currentHead;

  return head;
};
