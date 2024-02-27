import { ListNode } from '../models/list-node';

/**
 Do not return anything, modify it in-place instead.
 */
export const deleteNode = (node: ListNode | null): void => {
  if (!node) {
    return;
  }

  node.val = node.next?.val ?? 0;
  node.next = node.next?.next ?? null;
};
