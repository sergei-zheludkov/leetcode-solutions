import { ListNode } from '../models/list-node';

export const detectCycle = (list: ListNode | null): ListNode | null => {
  const collection = new Set<ListNode>();

  const recursionCheck = (head: ListNode | null, index = 0): ListNode | null => {
    if (!head || collection.has(head)) {
      return head;
    }

    collection.add(head);

    return recursionCheck(head.next, index + 1);
  };

  return recursionCheck(list);
};
