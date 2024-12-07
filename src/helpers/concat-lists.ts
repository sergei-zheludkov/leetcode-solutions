import { SinglyListNode as ListNode } from '../models/singly-list-node';

export const concatLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
  if (!list1) {
    return list2;
  }

  list1.next = concatLists(list1.next, list2);

  return list1;
};
