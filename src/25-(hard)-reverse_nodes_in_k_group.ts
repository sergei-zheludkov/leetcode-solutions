// link to problem: https://leetcode.com/problems/reverse-nodes-in-k-group

import { ListNode } from "./models/list-node";
import { getArrayFromList } from "./helpers/get-array-from-list";
import { getListLength } from "./helpers/get-list-length";
import { concatLists } from "./helpers/concat-lists";

const test1_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const test2_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));

// Not the best solution, TODO: try to find better in the future

function reverseKGroup(head: ListNode | null, length: number): ListNode | null {
  if (!head) {
    return head;
  }

  let step = length;
  const array: ListNode[] = [];

  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current && getListLength(current) >= step) {
    const newCurrent: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = newCurrent;

    step -= 1;

    if (step === 0) {
      array.push(prev);
      prev = null;
      step = length;
    }
  }

  if (current) {
    array.push(current);
  }

  const [first, ...rest] = array;

  return rest.reduce(concatLists, first);
}

console.log(`test 1: \n List: ${getArrayFromList(test1_list)} \n Expected: 2,1,4,3,5 \n Output: ${getArrayFromList(reverseKGroup(test1_list, 2))}`);
console.log(`test 1: \n List: ${getArrayFromList(test2_list)} \n Expected: 2,1,4,3,6,5 \n Output: ${getArrayFromList(reverseKGroup(test2_list, 2))}`);
