import { ListNode } from '../models/list-node';

export const doubleIt = (head: ListNode | null): ListNode | null => {
  const stack: ListNode[] = [];

  while (head) {
    stack.push(head);

    head = head.next;
  }

  let addition = 0;

  for (let i = stack.length - 1; i >= 0; i--) {
    const multiply = stack[i].val * 2 + addition;

    addition = multiply > 9 ? 1 : 0;

    stack[i].val = multiply % 10;
  }

  let result = stack[0];

  if (addition) {
    result = new ListNode(1, result);
  }

  return result;
};