import { DoublyListNode as ListNode } from '../models/doubly-list-node';

export const flatten = (head: ListNode | null, tail: ListNode | null = null): ListNode | null  => {
  let current = head;

  while (current?.next && !current.child) {
    current = current.next;
  }

  if (current?.child) {
    const child = current.child;

    child.prev = current;
    current.next = flatten(child, current.next ? flatten(current.next, tail) : tail);

    current.child = null;
  } else if (current && tail) {
    current.next = tail;
    tail.prev = current;
  }

  return head;
};

// PREVIOUS SOLUTION

// type Result = {
//   start: ListNode | null;
//   end: ListNode | null;
// }
//
// const flat = (head: ListNode | null): Result => {
//   let current = head;
//   let prev = null;
//
//   while (current) {
//     if (current.child) {
//
//       const tail = current.next;
//
//       current.child.prev = current;
//
//       const { start, end } = flat(current.child);
//
//       current.next = start;
//       current.child = null;
//
//       if (end) {
//         end.next = tail;
//       }
//
//
//       if (tail) {
//         tail.prev = end;
//       }
//
//       current = end;
//     }
//
//     if (current) {
//       prev = current;
//       current = current.next;
//     }
//   }
//
//
//   return { start: head, end: prev };
// };
//
// export const flatten = (head: ListNode | null): ListNode | null  => {
//   flat(head);
//
//   console.log(JSON.stringify(getArrayFromSinglyList(head)));
//
//   return head;
// };
