export class DoublyListNode {
  val: number;
  prev: DoublyListNode | null;
  next: DoublyListNode | null;
  child: DoublyListNode | null;

  constructor(val: number, prev: DoublyListNode | null,  next: DoublyListNode | null, child: DoublyListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.prev = (prev === undefined ? null : prev);
    this.next = (next === undefined ? null : next);
    this.child = (child === undefined ? null : child);
  }
}
