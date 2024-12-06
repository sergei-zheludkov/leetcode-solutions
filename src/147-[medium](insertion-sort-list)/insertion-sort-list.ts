import { SinglyListNode as ListNode } from '../models/singly-list-node';
// import { getArrayFromList } from '../helpers/get-array-from-list';
// import { createLinkedList } from '../helpers/create-linked-list';

type Node = ListNode | null;

export const insertionSortList = (head: Node): Node => {
  if (!head?.next) {
    return head;
  }

  const dummy = new ListNode(0, head);
  let prev: Node = head;
  let curr: Node = head.next;

  while (curr) {
    if (curr.val >= prev.val) {
      prev = curr;
      curr = curr.next;
      continue;
    }

    let tmp: Node  = dummy;

    while (tmp.next && curr.val > tmp.next?.val) {
      tmp = tmp.next;
    }

    prev.next = curr.next;
    curr.next = tmp.next;
    tmp.next = curr;
    curr = prev.next;
  }

  return dummy.next;
};

// export const insertionSortList = (head: Node): Node => {
//   if (!head?.next) {
//     return head;
//   }
//
//   let tail: Node = head.next;
//   head.next = null;
//
//   const queue = [head];
//
//   while (tail) {
//     const current = tail;
//     tail = tail.next;
//     current.next = null;
//     queue.push(current);
//
//     for (let i = queue.length - 1; i >= 0; i--) {
//       if (queue[i]?.val < queue[i-1]?.val) {
//         [queue[i].val, queue[i-1].val] = [queue[i-1].val, queue[i].val];
//       }
//     }
//   }
//
//   queue.forEach((node, i) => {
//     node.next = queue[i + 1] ?? null;
//   });
//
//   return queue[0];
// };

// export const insertionSortList = (head: ListNode | null): ListNode | null => {
//   const [first, ...rest] = getArrayFromList(head);
//   const sorted = [first];
//
//   for (const n of rest) {
//     sorted.push(n);
//
//     for (let i = sorted.length; i >= 0; i--) {
//       if (sorted[i] < sorted[i-1]) {
//         [sorted[i], sorted[i-1]] = [sorted[i-1], sorted[i]];
//       }
//     }
//   }
//
//   return createLinkedList(sorted);
// };
