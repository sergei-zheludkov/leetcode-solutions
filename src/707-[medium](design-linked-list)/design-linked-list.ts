import { ListNode } from '../models/list-node';
import { getArrayFromList } from '../helpers/get-array-from-list';

export class MyLinkedList {
  private head: ListNode | null = null;
  private tail: ListNode | null = null;

  constructor(...nodes: number[]) {
    this.head = nodes.length ? this.createLinkedList(nodes) : null;
  }

  private createLinkedList(nodes: number[]): ListNode | null {
    if (!nodes.length) {
      return null;
    }

    const [val, ...rest] = nodes;

    const node = new ListNode(val, this.createLinkedList(rest));

    if (!rest.length) {
      this.tail = node;
    }

    return node;
  }

  get(index: number): number {
    let current = this.head;

    while (index-- && current) {
      current = current.next;
    }

    return current?.val ?? -1;
  }

  getHead(): number {
    return this.head?.val ?? NaN;
  }

  getTail(): number {
    return this.tail?.val ?? NaN;
  }

  addAtHead(val: number): void {
    this.head = new ListNode(val, this.head);

    if (!this.tail) {
      this.tail = this.head;
    }
  }

  getValuesArray(): number[] {
    return getArrayFromList(this.head);
  }

  addAtTail(val: number): void {
    const node = new ListNode(val);

    if (!this.head) {
      this.head = node;
    }

    if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node;
  }

  addAtIndex(index: number, val: number): void {
    const dummy = new ListNode(NaN, this.head);

    let current: ListNode | null = dummy;

    while (index && current) {
      current = current.next;
      index--;
    }

    if (current && !index) {
      const node = new ListNode(val, current.next);

      if (!node.next) {
        this.tail = node;
      }

      current.next = node;
    }

    this.head = dummy.next;
  }

  deleteAtIndex(index: number): void {
    const dummy = new ListNode(NaN, this.head);

    let current: ListNode | null = dummy;

    while (index && current) {
      current = current.next;
      index--;
    }

    if (current) {
      current.next = current.next?.next ?? null;
    }

    if (!current?.next) {
      this.tail = current;
    }

    this.head = dummy.next;
  }
}

/*
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
