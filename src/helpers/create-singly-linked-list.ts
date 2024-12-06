import { SinglyListNode as ListNode } from '../models/singly-list-node';

export const createSinglyLinkedList = (nodes: Array<number> | null): ListNode | null => {
  if (!nodes || !nodes.length) {
    return null;
  }

  const [val, ...rest] = nodes;

  return new ListNode(val, createSinglyLinkedList(rest));
};
