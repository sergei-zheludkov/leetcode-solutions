import { SinglyListNode as ListNode } from '../models/singly-list-node';

export const oddEvenList = (head: ListNode | null): ListNode | null => {
  if (!head) {
    return null;
  }

  let odd = head, even = head.next;

  const evenHead = even;

  while (even?.next) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};


// const oddEvenList = (head: ListNode | null): ListNode | null => {
//   if (!head?.next?.next) {
//     return head;
//   }
//
//   const evenHead: ListNode | null = head.next;
//   let odd: ListNode | null = head;
//   let even: ListNode | null = evenHead;
//
//   while (even?.next) {
//     odd.next = even.next;
//     odd = odd.next;
//
//     even.next = odd.next;
//     even = even.next;
//   }
//
//   odd.next = evenHead;
//
//   return head;
// };


// export const oddEvenList = (head: ListNode | null): ListNode | null => {
//   if (!head?.next?.next) {
//     return head;
//   }
//
//   const odd: number[] = [];
//   const even: number[] = [];
//
//   let current: ListNode | null = head;
//   let flag = true;
//
//   while (current) {
//     if (flag) {
//       odd.push(current.val);
//     } else {
//       even.push(current.val);
//     }
//
//     flag = !flag;
//     current = current.next;
//   }
//
//   const result = new ListNode(0);
//
//   current = result;
//
//   for (const num of odd) {
//     current.next = new ListNode(num);
//
//     current = current?.next;
//   }
//
//   for (const num of even) {
//     current.next = new ListNode(num);
//
//     current = current?.next;
//   }
//
//   return result.next;
// };
