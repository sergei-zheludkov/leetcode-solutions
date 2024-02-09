// link to problem: https://leetcode.com/problems/reverse-linked-list

import { ListNode } from "./models/list-node";
import { getArrayFromList } from "./helpers/get-array-from-list";

const test1_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number 6
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current = head;

  while (current) {
    const next = current.next
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}


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
// function reverseList(head: ListNode | null): ListNode | null {
//   if (!head?.next) {
//     return head;
//   }
//
//   const headCopy = { ...head, next: null }
//   return combineList(reverseList(head.next), headCopy);
// }

console.log(`test 1: \n List: ${getArrayFromList(test1_list)} \n Expected: 6,5,4,3,2,1 \n Output: ${getArrayFromList(reverseList(test1_list))}`);
