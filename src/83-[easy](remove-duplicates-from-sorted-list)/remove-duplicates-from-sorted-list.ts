import { SinglyListNode as ListNode } from '../models/singly-list-node';

export const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  if (!head) {
    return head;
  }

  if (head.val === head.next?.val) {
    head.next = deleteDuplicates(head.next.next);

    return deleteDuplicates(head);
  }

  head.next = deleteDuplicates(head.next);

  return head;
};

// export const deleteDuplicates = (head: ListNode | null): ListNode | null => {
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
