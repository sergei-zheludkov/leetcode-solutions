// link: https://leetcode.com/problems/linked-list-cycle

/**
 * Definition for singly-linked list.
 *
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

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