// link to problem: https://leetcode.com/problems/merge-k-sorted-lists

import { ListNode } from "./models/list-node";
import { getArrayFromList } from "./helpers/get-array-from-list";
import { mergeTwoLists } from "./21-(easy)-merge_two_sorted_lists";

const test1_list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const test1_list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const test1_list3 = new ListNode(2, new ListNode(6));
const test1_list_arr = [test1_list1, test1_list2, test1_list3];

const test2_list_arr: ListNode[] = [];

const test3_list1 = new ListNode();
const test3_list_arr = [test3_list1];

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let result: ListNode | null = null;

  for (const list of lists) {
    result = mergeTwoLists(result, list);
  }

  return result;
}

console.log(`test 1: \n EXPECTED: 1,1,2,3,4,4,5,6 \n OUTPUT: ${getArrayFromList(mergeKLists(test1_list_arr))}`);
console.log(`test 2: \n EXPECTED:  \n OUTPUT: ${getArrayFromList(mergeKLists(test2_list_arr))}`);
console.log(`test 3: \n EXPECTED:  \n OUTPUT: ${getArrayFromList(mergeKLists(test3_list_arr))}`);

export { mergeKLists }