import { ListNode } from '../models/list-node';

export const getArrayFromList = (list: ListNode | null): number[] => {
  const nodes: number[] = [];

  while (list) {
    nodes.push(list.val);

    list = list.next;
  }

  return nodes;
};

// -- Recursion --

// export const getArrayFromList = (list: ListNode | null, acc: number[] = []): number[] => {
//   if (!list) {
//     return acc;
//   }
//
//   if (list.next === null || list.next === undefined) {
//     return [...acc, list.val];
//   }
//
//   const newAcc = [...acc, list.val];
//
//   return getArrayFromList(list.next, newAcc);
// };
