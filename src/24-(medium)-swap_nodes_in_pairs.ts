// link to problem: https://leetcode.com/problems/swap-nodes-in-pairs

import { ListNode } from "./models/list-node";
import { getArrayFromList } from "./helpers/get-array-from-list";

const test1_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
const test2_list = null
const test3_list = new ListNode(1);
const test4_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const currentHead: ListNode = { ...head, next: swapPairs(head.next.next) };

  head = head.next;
  head.next = currentHead;

  return head;
}

console.log(`test 1: \n List: ${getArrayFromList(test1_list)} \n Expected: 2,1,4,3 \n Output: ${getArrayFromList(swapPairs(test1_list))}`);
console.log(`test 2: \n List: ${getArrayFromList(test2_list)} \n Expected: \n Output: ${getArrayFromList(swapPairs(test2_list))}`);
console.log(`test 3: \n List: ${getArrayFromList(test3_list)} \n Expected: 1 \n Output: ${getArrayFromList(swapPairs(test3_list))}`);
console.log(`test 4: \n List: ${getArrayFromList(test4_list)} \n Expected: 2,1,4,3,5 \n Output: ${getArrayFromList(swapPairs(test4_list))}`);
