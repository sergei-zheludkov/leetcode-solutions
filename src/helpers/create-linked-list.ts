import { ListNode } from '../models/list-node';

export const createLinkedList = (nodes: Array<number>): ListNode | null => {
  if (!nodes.length) {
    return null;
  }

  const [val, ...rest] = nodes;

  return new ListNode(val, createLinkedList(rest));
};
