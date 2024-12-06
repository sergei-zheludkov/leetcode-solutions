import { SinglyListNode as ListNode } from '../models/singly-list-node';

export const removeElements = (head: ListNode | null, val: number): ListNode | null => {
  if (!head) {
    return head;
  }

  head.next = removeElements(head.next, val);

  return head.val === val ? head.next : head;
};
