// link to problem: https://leetcode.com/problems/remove-linked-list-elements

import { ListNode } from "./models/list-node";
import { getArrayFromList } from "./helpers/get-array-from-list";

const test1_list = new ListNode(-15, new ListNode(2, new ListNode(-10, new ListNode(-7, new ListNode(-1, new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(4)))))))));
const test2_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) {
    return head;
  }

  head.next = removeElements(head.next, val);

  return head.val === val ? head.next : head;
}


console.log(`test 1: \n List: ${getArrayFromList(test1_list)} \n Expected: -15,-10,-7,-1,0,1,4 \n Output: ${getArrayFromList(removeElements(test1_list, 2))}`);
console.log(`test 2: \n List: ${getArrayFromList(test2_list)} \n Expected: 1,2,3,4,5 \n Output: ${getArrayFromList(removeElements(test2_list, 6))}`);
