import { DoublyListNode as ListNode } from '../models/doubly-list-node';

export const createSinglyLinkedList = (nodes: Array<number> | null): ListNode | null => {
  if (!nodes?.length) {
    return null;
  }

  const head = new ListNode(nodes[0], null, null);

  let curr = head;

  for (let i = 1; i < nodes.length; i++) {
    curr.next = new ListNode(nodes[i], curr, null);
    curr = curr?.next;
  }

  return head;
};