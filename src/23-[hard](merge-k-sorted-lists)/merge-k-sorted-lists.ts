import { ListNode } from '../models/list-node';
import { mergeTwoLists } from '../21-[easy](merge-two-sorted-lists)/merge-two-sorted-lists';

export const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {
  let result: ListNode | null = null;

  for (const list of lists) {
    result = mergeTwoLists(result, list);
  }

  return result;
};
