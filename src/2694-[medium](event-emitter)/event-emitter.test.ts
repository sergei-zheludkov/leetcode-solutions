import { EventEmitter } from './event-emitter';

describe('event emitter', () => {
  let emmiter: EventEmitter;

  beforeEach(() => {
    emmiter = new EventEmitter();
  });

  test('two different events', () => {
    emmiter.subscribe('event_1', () => 'fuzz');
    emmiter.subscribe('event_2', () => 'buzz');

    expect(emmiter.emit('event_1')).toEqual(['fuzz']);
    expect(emmiter.emit('event_2')).toEqual(['buzz']);
  });

  test('two same events', () => {
    emmiter.subscribe('event', () => 5);
    emmiter.subscribe('event', () => 6);

    expect(emmiter.emit('event')).toEqual([5,6]);
  });

  test('event with args', () => {
    emmiter.subscribe('event', (...args: number[]) => args.join(','));

    expect(emmiter.emit('event', [1,2,3])).toEqual(['1,2,3']);
    expect(emmiter.emit('event', [3,4,6])).toEqual(['3,4,6']);
  });

  test('unsubscribe event', () => {
    const event = emmiter.subscribe('event', (...args: number[]) => args.join(','));

    expect(emmiter.emit('event', [1,2,3])).toEqual(['1,2,3']);

    event.unsubscribe();

    expect(emmiter.emit('event', [3,4,6])).toEqual([]);
  });

  test('unsubscribe event only one', () => {
    const event1 = emmiter.subscribe('event', x => x + 1);
    const event2 = emmiter.subscribe('event', x => x + 2);

    expect(emmiter.emit('event', [5])).toEqual([6,7]);

    event1.unsubscribe();

    expect(emmiter.emit('event', [5])).toEqual([7]);

    event2.unsubscribe();
    
    expect(emmiter.emit('event', [5])).toEqual([]);
  });
});
