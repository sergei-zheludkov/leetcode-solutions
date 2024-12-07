import { SinglyListNode as ListNode } from '../models/singly-list-node';

export const modifiedList = (nums: number[], head: ListNode | null): ListNode | null => {
  const collection = new Set(nums);
  const dummy = new ListNode(0, head);
  let current = dummy;

  while (current.next) {
    if (collection.has(current.next.val)) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
};

// export const modifiedList = (nums: number[], head: ListNode | null): ListNode | null => {
//   const collection = new Set(nums);
//
//   if (!head) {
//     return null;
//   }
//
//   if (collection.has(head.val)) {
//     return modifiedList(nums, head.next);
//   }
//
//   head.next = modifiedList(nums, head.next);
//
//   return head;
// };
