import { Iterator } from './iterator';

export class PeekingIterator {
  iterator: Iterator;

  constructor(iterator: Iterator) {
    this.iterator = iterator;
  }

  peek(): number {
    return this.iterator.data[this.iterator.index];
  }

  next(): number {
    return this.iterator.next();
  }

  hasNext(): boolean {
    return this.iterator.hasNext();
  }
}