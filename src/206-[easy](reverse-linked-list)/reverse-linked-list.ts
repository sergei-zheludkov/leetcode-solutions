import { SinglyListNode as ListNode } from '../models/singly-list-node';

export const reverseList = (head: ListNode | null): ListNode | null => {
  let prev: ListNode | null = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};


// RECURSIVE SOLUTION

// const combineList = (head: ListNode | null, next: ListNode): ListNode | null => {
//   if (!head) {
//     return head;
//   }
//
//   if (!head.next) {
//     head.next = next;
//
//     return head;
//   }
//
//   head.next = combineList(head.next, next)
//
//   return head;
// }
//
// export const reverseList = (head: ListNode | null): ListNode | null => {
//   if (!head?.next) {
//     return head;
//   }
//
//   const headCopy = { ...head, next: null }
//   return combineList(reverseList(head.next), headCopy);
// }
