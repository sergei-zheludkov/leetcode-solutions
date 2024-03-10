import { ListNode } from '../models/list-node';
import { getListLength } from '../helpers/get-list-length';

export const rotateRight = (head: ListNode | null, k: number): ListNode | null => {
  if (!head || !head.next || !k) {
    return head;
  }

  let length = getListLength(head);
  k %= length;

  if (!k) {
    return head;
  }

  let dummy: ListNode | null = new ListNode(0, head);
  let list: ListNode | null = null;

  while (dummy) {
    if (!dummy.next) {
      dummy.next = head;
      break;
    }

    if (length === k) {
      list = dummy.next;
      dummy.next = null;
      dummy = list;
    } else {
      dummy = dummy.next;
    }
    length--;
  }

  return list;
};

// const rotateRight = (head: ListNode | null, k: number): ListNode | null => {
//   if (!head) {
//     return head;
//   }
//
//   const array = getArrayFromList(head);
//
//   while (k) {
//     const last = array.pop() ?? NaN;
//     array.unshift(last);
//     k--;
//   }
//
//   return createLinkedList(array);
// };