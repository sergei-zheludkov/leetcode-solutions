import { ListNode } from '../models/list-node';

export const getArrayFromList = (list1: ListNode | null, acc: number[] = []): number[] => {
  if (!list1) {
    return acc;
  }

  if (list1.next === null || list1.next === undefined) {
    return [...acc, list1.val];
  }

  const newAcc = [...acc, list1.val];

  return getArrayFromList(list1.next, newAcc);
};