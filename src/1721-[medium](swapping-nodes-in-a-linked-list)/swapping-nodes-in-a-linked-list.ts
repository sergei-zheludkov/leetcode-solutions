import { ListNode } from '../models/list-node';

export const swapNodes = (head: ListNode | null, k: number): ListNode | null => {
  let cur = head;
  k--;

  while (k && cur) {
    cur = cur?.next;
    k--;
  }

  const left = cur;
  let right = head;

  while (cur?.next && right) {
    cur = cur.next;
    right = right.next;
  }

  if (left && right) {
    const val = left.val;

    left.val = right.val;
    right.val = val;
  }

  return head;
};

// PREV SOLUTION
//
// export const swapNodes = (head: ListNode | null, k: number): ListNode | null => {
//   const dummy = new ListNode(0, head);
//   const points = { start: k, end: k };
//   let leftNode: ListNode | null = dummy;
//
//   while (points.start && leftNode) {
//     leftNode = leftNode.next;
//     points.start--;
//   }
//
//   let rightNode: ListNode | null = head;
//   let tail: ListNode | null = head;
//
//   while (points.end && tail) {
//     tail = tail.next;
//     points.end--;
//   }
//
//   while (tail) {
//     rightNode = rightNode?.next ?? null;
//     tail = tail.next;
//   }
//
//   if (rightNode && leftNode) {
//     const leftVal = leftNode.val;
//     const rightVal = rightNode.val;
//
//     leftNode.val = rightVal;
//     rightNode.val = leftVal;
//   }
//
//   return head;
// };
