import { ListNode } from '../models/list-node';

export const hasCycle = (list: ListNode | null): boolean => {
  const newCollection = new Set<ListNode>();

  const recursionCheck = (head: ListNode | null): boolean => {
    if (!head) {
      return false;
    }

    if (newCollection.has(head)) {
      return true;
    }

    newCollection.add(head);

    return recursionCheck(head.next);
  };

  return recursionCheck(list);
};
