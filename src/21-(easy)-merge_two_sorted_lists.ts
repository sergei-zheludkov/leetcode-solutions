// link to problem: https://leetcode.com/problems/merge-two-sorted-lists

import { ListNode } from "./models/list-node";
import { getArrayFromList } from "./helpers/get-array-from-list";

const test1_list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const test1_list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const test2_list1 = new ListNode();
const test2_list2 = new ListNode();

const test3_list1 = new ListNode();
const test3_list2 = new ListNode(0);

const test4_list1 = new ListNode(0);
const test4_list2 = new ListNode();

const test5_list1 = new ListNode(-15, new ListNode(-10, new ListNode(-7, new ListNode(-1, new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(4))))))));
const test5_list2 = new ListNode(-10, new ListNode(-3, new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(7))))));

const test6_list1 = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(2, new ListNode(4)))));
const test6_list2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))));

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  if (list1.val < list2.val) {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }

  list1.next = mergeTwoLists(list1.next, list2);
  return list1;
}

console.log('test 1: [1,1,2,3,4,4] =>', mergeTwoLists(test1_list1, test1_list2));
console.log('test 2: [] =>', mergeTwoLists(test2_list1, test2_list2));
console.log('test 3: [0] =>', mergeTwoLists(test3_list1, test3_list2));
console.log('test 4: [0] =>', mergeTwoLists(test4_list1, test4_list2));
console.log('test 5: null =>', mergeTwoLists(test5_list1, test5_list2));
console.log(`test 6: \n List1: ${getArrayFromList(test6_list1)} \n List2: ${getArrayFromList(test6_list2)} \n Expected: 1,1,2,2,2,2,3,4,4,4 \n Output: ${getArrayFromList(mergeTwoLists(test6_list1, test6_list2))}`, );


export { mergeTwoLists };