import { DoublyListNode } from '../models/doubly-list-node';

export const toArray = (head: DoublyListNode | null): number[] => {
  const nodes: number[] = [];

  while (head?.prev) {
    head = head.prev;
  }

  while (head) {
    nodes.push(head.val);

    head = head.next;
  }

  return nodes;
};
