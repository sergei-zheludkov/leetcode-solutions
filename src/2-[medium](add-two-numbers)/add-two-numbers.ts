import { ListNode } from '../models/list-node';

export const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  const dummy = new ListNode(0);
  let lastNode = dummy;
  let remainder = 0;

  const add = (head1: ListNode | null, head2: ListNode | null) => {
    if (!head1 && !remainder) {
      lastNode.next = head2;
      return;
    }

    if (!head2 && !remainder) {
      lastNode.next = head1;
      return;
    }

    let sum = (head1?.val ?? 0) + (head2?.val ?? 0) + remainder;

    if (sum > 9) {
      sum %= 10;
      remainder = 1;
    } else {
      remainder = 0;
    }

    lastNode.next = new ListNode(sum);
    lastNode = lastNode.next;

    add(head1?.next ?? null, head2?.next ?? null);
  };

  add(l1, l2);

  return dummy.next;
};
