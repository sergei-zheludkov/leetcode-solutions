import { SinglyListNode as ListNode } from '../models/singly-list-node';
import { gcd } from '../helpers/great-common-divisor';


export const insertGreatestCommonDivisors = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) {
    return head;
  }

  head.next = new ListNode(gcd(head.val, head.next.val), insertGreatestCommonDivisors(head.next));

  return head;
};
