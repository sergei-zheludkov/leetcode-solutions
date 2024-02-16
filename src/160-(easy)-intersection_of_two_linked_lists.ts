// link to problem: https://leetcode.com/problems/intersection-of-two-linked-lists

import { ListNode } from "./models/list-node";
import { getArrayFromList } from "./helpers/get-array-from-list";

const test1_intersect = new ListNode(8, new ListNode(4, new ListNode(5)));
const test1_listA = new ListNode(4, new ListNode(1, test1_intersect));
const test1_listB = new ListNode(5, new ListNode(6, new ListNode(1, test1_intersect)));

const test2_intersect = new ListNode(2, new ListNode(4));
const test2_listA = new ListNode(1, new ListNode(9, new ListNode(1, test2_intersect)));
const test2_listB = new ListNode(3, test2_intersect);

const test3_listA = new ListNode(2, new ListNode(6, new ListNode(4)));
const test3_listB = new ListNode(1, new ListNode(5));

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    p1 = p1 === null ? headB : p1.next;
    p2 = p2 === null ? headA : p2.next;
  }

  return p1;
}

// PREVIOUS SOLUTION

// function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
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
// }

console.log(`test1: \n LIST_A: ${getArrayFromList(test1_listA)} \n LIST_B: ${getArrayFromList(test1_listB)} \n EXPECTED: 8 \n OUTPUT:`, getIntersectionNode(test1_listA, test1_listB));
console.log(`test2: \n LIST_A: ${getArrayFromList(test2_listA)} \n LIST_B: ${getArrayFromList(test2_listB)} \n EXPECTED: 2 \n OUTPUT:`, getIntersectionNode(test2_listA, test2_listB));
console.log(`test3: \n LIST_A: ${getArrayFromList(test3_listA)} \n LIST_B: ${getArrayFromList(test3_listB)} \n EXPECTED: null \n OUTPUT:`, getIntersectionNode(test3_listA, test3_listB));
