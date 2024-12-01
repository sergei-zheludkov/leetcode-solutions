import { ListNode } from '../models/list-node';

export const deleteMiddle = (head: ListNode | null): ListNode | null => {
  const dummy = new ListNode(0, head);
  let slow: ListNode | null = dummy;
  let fast: ListNode | null  = dummy.next;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  if (!slow?.next) {
    return null;
  }

  slow.next = slow.next.next;

  return dummy.next;
};
