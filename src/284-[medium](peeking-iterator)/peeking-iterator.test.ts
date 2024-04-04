import { PeekingIterator } from './peeking-iterator';
import { Iterator } from './iterator';

describe('peeking iterator', () => {
  test('next cases', () => {
    const iterator = new Iterator([1,2,3]);
    const peekingIterator = new PeekingIterator(iterator);

    expect(peekingIterator.next()).toBe(1);
    expect(peekingIterator.hasNext()).toBeTruthy();

    expect(peekingIterator.next()).toBe(2);
    expect(peekingIterator.hasNext()).toBeTruthy();

    expect(peekingIterator.next()).toBe(3);
    expect(peekingIterator.hasNext()).toBeFalsy();
  });

  test('mixed cases', () => {
    const iterator = new Iterator([100,200,300,400,500]);
    const peekingIterator = new PeekingIterator(iterator);

    expect(peekingIterator.peek()).toBe(100);
    expect(peekingIterator.peek()).toBe(100);
    expect(peekingIterator.hasNext()).toBeTruthy();

    expect(peekingIterator.next()).toBe(100);
    expect(peekingIterator.hasNext()).toBeTruthy();

    expect(peekingIterator.peek()).toBe(200);
    expect(peekingIterator.next()).toBe(200);
    expect(peekingIterator.hasNext()).toBeTruthy();

    expect(peekingIterator.peek()).toBe(300);
    expect(peekingIterator.next()).toBe(300);
    expect(peekingIterator.hasNext()).toBeTruthy();

    expect(peekingIterator.peek()).toBe(400);
    expect(peekingIterator.peek()).toBe(400);
    expect(peekingIterator.next()).toBe(400);
    expect(peekingIterator.hasNext()).toBeTruthy();

    expect(peekingIterator.peek()).toBe(500);
    expect(peekingIterator.peek()).toBe(500);
    expect(peekingIterator.next()).toBe(500);
    expect(peekingIterator.hasNext()).toBeFalsy();
  });
});
