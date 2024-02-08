// link to problem: https://leetcode.com/problems/linked-list-cycle
import { ListNode } from "./helpers/list-node";

function hasCycle(head: ListNode | null): boolean {
  const newCollection = new Set<ListNode>();

  const recursionCheck = (head: ListNode | null): boolean => {
    if (!head) {
      return false;
    }

    if (newCollection.has(head)) {
      return true;
    }

    newCollection.add(head);

    return recursionCheck(head.next);
  }

  return recursionCheck(head);
}


export { hasCycle };