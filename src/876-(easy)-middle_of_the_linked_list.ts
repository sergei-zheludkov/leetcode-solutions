// link to problem: https://leetcode.com/problems/middle-of-the-linked-list

import { ListNode } from "./models/list-node";
import { getListLength } from "./helpers/get-list-length";
import { getArrayFromList } from "./helpers/get-array-from-list";

const test1_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const test2_list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
const test3_list = new ListNode(1);
const test4_list = null;

const separateListByNodeNumber = (list: ListNode | null, num: number): ListNode | null => {
  if (!list || getListLength(list) === num) {
    return list;
  }

  return separateListByNodeNumber(list?.next, num);
};

function middleNode(head: ListNode | null): ListNode | null {
  const length = getListLength(head);

  if (!head || length < 2) {
    return head;
  }

  return separateListByNodeNumber(head, Math.ceil(length / 2));
}

console.log(`test 1: \n List: ${getArrayFromList(test1_list)} \n Expected: 3,4,5 \n Output: ${getArrayFromList(middleNode(test1_list))}`);
console.log(`test 2: \n List: ${getArrayFromList(test2_list)} \n Expected: 4,5,6 \n Output: ${getArrayFromList(middleNode(test2_list))}`);
console.log(`test 3: \n List: ${getArrayFromList(test3_list)} \n Expected: 1 \n Output: ${getArrayFromList(middleNode(test3_list))}`);
console.log(`test 4: \n List: ${getArrayFromList(test4_list)} \n Expected:   \n Output: ${getArrayFromList(middleNode(test4_list))}`);

export { middleNode };
