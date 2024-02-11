// link to problem: https://leetcode.com/problems/remove-duplicates-from-sorted-list

import { ListNode } from "./models/list-node";
import { getArrayFromList } from "./helpers/get-array-from-list";

const test1_list = new ListNode(1, new ListNode(1, new ListNode(2)));
const test2_list = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
const test3_list = new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))));
const test4_list = new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(3))))))))));
const test5_list = new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0))))))))));


// function deleteDuplicates(head: ListNode | null): ListNode | null {
//   let current = head;
//
//   while (current?.next) {
//     if (current.val === current.next.val) {
//       current.next = current.next.next;
//     } else {
//       current = current.next;
//     }
//   }
//
//   return head;
// }

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }

  if (head.val === head.next?.val) {
    head.next = deleteDuplicates(head.next.next);

    return deleteDuplicates(head);
  }

  head.next = deleteDuplicates(head.next);

  return head;
}

console.log(`test 1: \n List: ${getArrayFromList(test1_list)} \n Expected: 1,2 \n Output: ${getArrayFromList(deleteDuplicates(test1_list))}`);
console.log(`test 2: \n List: ${getArrayFromList(test2_list)} \n Expected: 1,2,3 \n Output: ${getArrayFromList(deleteDuplicates(test2_list))}`);
console.log(`test 3: \n List: ${getArrayFromList(test3_list)} \n Expected: 1,2,3 \n Output: ${getArrayFromList(deleteDuplicates(test3_list))}`);
console.log(`test 4: \n List: ${getArrayFromList(test4_list)} \n Expected: 1,2,3 \n Output: ${getArrayFromList(deleteDuplicates(test4_list))}`);
console.log(`test 5: \n List: ${getArrayFromList(test5_list)} \n Expected: 0 \n Output: ${getArrayFromList(deleteDuplicates(test5_list))}`);
