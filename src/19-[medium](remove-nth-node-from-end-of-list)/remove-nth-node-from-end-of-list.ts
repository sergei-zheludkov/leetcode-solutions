import { ListNode } from '../models/list-node';

export const removeNthFromEnd = (head: ListNode | null, removeElemNum: number): ListNode | null => {
  const dummy = new ListNode(0, head);
  let p1: ListNode | null = dummy;
  let p2: ListNode | null = head;

  while (removeElemNum > 0 && p2) {
    p2 = p2.next;
    removeElemNum--;
  }

  while (p2) {
    p1 = p1?.next ?? null;
    p2 = p2.next;
  }

  if (p1) {
    p1.next = p1.next?.next ?? null;
  }

  return dummy.next ?? null;
};

// PREV SOLUTION

// export const removeNthFromEnd = (head: ListNode | null, removeElemNum: number): ListNode | null => {
//   if (!head) {
//     return head;
//   }
//
//   if (getListLength(head) === removeElemNum) {
//     return head.next;
//   }
//
//   head.next = removeNthFromEnd(head.next, removeElemNum);
//
//   return head;
// };
