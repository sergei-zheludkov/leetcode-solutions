import { ListNode } from '../models/list-node';
import { getListLength } from '../helpers/get-list-length';

const separateListByNodeNumber = (list: ListNode | null, num: number): ListNode | null => {
  if (!list || getListLength(list) === num) {
    return list;
  }

  return separateListByNodeNumber(list?.next, num);
};

export const middleNode = (head: ListNode | null): ListNode | null => {
  const length = getListLength(head);

  if (!head || length < 2) {
    return head;
  }

  return separateListByNodeNumber(head, Math.ceil(length / 2));
};
