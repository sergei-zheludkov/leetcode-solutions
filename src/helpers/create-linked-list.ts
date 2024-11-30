import { ListNode } from '../models/list-node';

export const createLinkedList = (nodes: Array<number> | null): ListNode | null => {
  if (!nodes || !nodes.length) {
    return null;
  }

  const [val, ...rest] = nodes;

  return new ListNode(val, createLinkedList(rest));
};
