import { SinglyListNode as ListNode } from '../models/singly-list-node';

export const getIntersectionNode = (headA: ListNode | null, headB: ListNode | null): ListNode | null => {
  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    p1 = p1 === null ? headB : p1.next;
    p2 = p2 === null ? headA : p2.next;
  }

  return p1;
};

// PREVIOUS SOLUTION

// export const getIntersectionNode = (headA: ListNode | null, headB: ListNode | null): ListNode | null => {
//   let currentA: ListNode | null = headA;
//   let currentB: ListNode | null = headB;
//
//   const collection = new Set<ListNode | null>();
//
//   while (currentA || currentB) {
//     if (!currentA) {
//       currentA = currentB;
//       currentB = null;
//     }
//
//     if (collection.has(currentA)) {
//       return currentA;
//     } else {
//       collection.add(currentA);
//       currentA = currentA?.next ?? null;
//     }
//   }
//
//   return null;
// };

