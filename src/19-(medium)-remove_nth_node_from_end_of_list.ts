// link to problem: https://leetcode.com/problems/remove-nth-node-from-end-of-list

import { ListNode } from "./models/list-node";
import { getArrayFromList } from "./helpers/get-array-from-list";
import { getListLength } from "./helpers/get-list-length";

const test1_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const test1_n = 2;

const test2_list = new ListNode(1);
const test2_n = 1;

const test3_list = new ListNode(1, new ListNode(2,));
const test3_n = 1;

function removeNthFromEnd(head: ListNode | null, removeElemNum: number): ListNode | null {
  if (!head) {
    return head;
  }

  if (getListLength(head) === removeElemNum) {
    return head.next;
  }

  head.next = removeNthFromEnd(head.next, removeElemNum);

  return head;
}

console.log(`test 1: \n List: ${getArrayFromList(test1_list)} \n Expected: 1,2,3,5 \n Output: ${getArrayFromList(removeNthFromEnd(test1_list, test1_n))}`);
console.log(`test 2: \n List: ${getArrayFromList(test2_list)} \n Expected:  \n Output: ${getArrayFromList(removeNthFromEnd(test2_list, test2_n))}`);
console.log(`test 3: \n List: ${getArrayFromList(test3_list)} \n Expected: 1 \n Output: ${getArrayFromList(removeNthFromEnd(test3_list, test3_n))}`);

export { removeNthFromEnd };
