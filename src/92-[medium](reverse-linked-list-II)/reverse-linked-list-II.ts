import { ListNode } from '../models/list-node';

export const reverseBetween = (head: ListNode | null, left: number, right: number, lvl = 1): ListNode | null => {
  if (!head) {
    return head;
  }

  if (lvl === left) {
    const tail = head;
    let prev: ListNode | null = head;
    let current: ListNode | null = null;

    while (prev && right >= left) {
      const newPrev: ListNode | null = prev.next;
      prev.next = current;
      current = prev;
      prev = newPrev;
      right--;
    }

    if (tail) {
      tail.next = prev;
    }

    return current;
  }

  head.next = reverseBetween(head.next, left, right, lvl + 1);

  return head;
};
