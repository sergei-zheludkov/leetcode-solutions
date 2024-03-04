import { ListNode } from '../models/list-node';
import { getArrayFromList } from '../helpers/get-array-from-list';

export const isPalindrome = (head: ListNode | null): boolean => {
  const values = getArrayFromList(head);

  return values.toString() === values.reverse().toString();
};
