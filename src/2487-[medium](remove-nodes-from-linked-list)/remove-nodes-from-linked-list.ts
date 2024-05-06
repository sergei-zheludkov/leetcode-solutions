import { ListNode } from '../models/list-node';

export const removeNodes = (head: ListNode | null): ListNode | null => {
  if (!head) {
    return head;
  }

  const stack: ListNode[] = [];
  let curr: ListNode | null = head;

  while (curr) {
    while (curr.val > stack[stack.length-1]?.val) {
      stack.pop();
    }

    const newCurr: ListNode | null = curr.next;

    curr.next = null;

    if (stack.length) {
      stack[stack.length-1].next = curr;
    }

    stack.push(curr);

    curr = newCurr;
  }

  return stack[0];
};

// export const removeNodes = (head: ListNode | null): ListNode | null => {
//   if (!head) {
//     return head;
//   }
//
//   const stack: ListNode[] = [];
//   let curr: ListNode | null = head;
//
//   while (curr) {
//     while (curr.val > stack[stack.length-1]?.val) {
//       stack.pop();
//     }
//
//     const newCurr: ListNode | null = curr.next;
//
//     curr.next = null;
//
//     stack.push(curr);
//
//     curr = newCurr;
//   }
//
//   for (let i = 0; i < stack.length; i++){
//     stack[i].next = stack[i + 1] ?? null;
//   }
//
//   return stack[0];
// };

// export const removeNodes = (head: ListNode | null): ListNode | null => {
//   if (!head) {
//     return head;
//   }
//
//   const stack: ListNode[] = [];
//   let curr: ListNode | null = head;
//
//   while (curr) {
//     while (curr.val > stack[stack.length-1]?.val) {
//       stack.pop();
//     }
//
//     const newCurr: ListNode | null = curr.next;
//
//     curr.next = null;
//
//     stack.push(curr);
//
//     curr = newCurr;
//   }
//
//   return stack.reduceRight<ListNode | null>((list, node) => {
//     node.next = list;
//
//     return node;
//   }, null);
// };