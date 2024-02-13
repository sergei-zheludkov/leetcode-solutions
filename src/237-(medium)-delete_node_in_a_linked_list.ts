// link to problem: https://leetcode.com/problems/delete-node-in-a-linked-list

import { ListNode } from "./models/list-node";
import { getArrayFromList } from "./helpers/get-array-from-list";

const test1_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const test1_node: ListNode | null = test1_list.next?.next ?? null

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
  if (!node) {
    return;
  }

  node.val = node.next?.val ?? 0;
  node.next = node.next?.next ?? null;
}

deleteNode(test1_node);

console.log(`test 1: \n List: 1,2,3,4,5 \n Expected: 1,2,4,5 \n Output: ${getArrayFromList(test1_list)}`);
