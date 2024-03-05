import { TimeLimitedCache } from './cache-with-time-limit';

describe('cache with time limit', () => {
  let timeLimitedCache: TimeLimitedCache;

  beforeEach(() => {
    timeLimitedCache = new TimeLimitedCache();
  });

  test('once set', async () => {
    expect(timeLimitedCache.set(1, 42,100)).toBeFalsy();
    await new Promise((r) => setTimeout(r, 50));
    expect(timeLimitedCache.get(1)).toBe(42);
    expect(timeLimitedCache.count()).toBe(1);
    await new Promise((r) => setTimeout(r, 100));
    expect(timeLimitedCache.get(1)).toBe(-1);
  });

  test('rewrite', async () => {
    expect(timeLimitedCache.set(1, 42,50)).toBeFalsy();
    await new Promise((r) => setTimeout(r, 40));
    expect(timeLimitedCache.set(1, 50,100)).toBeTruthy();
    await new Promise((r) => setTimeout(r, 10));
    expect(timeLimitedCache.get(1)).toBe(50);
    await new Promise((r) => setTimeout(r, 70));
    expect(timeLimitedCache.get(1)).toBe(50);
    await new Promise((r) => setTimeout(r, 80));
    expect(timeLimitedCache.get(1)).toBe(-1);
    await new Promise((r) => setTimeout(r, 50));
    expect(timeLimitedCache.count()).toBe(0);
  });

  test('two different keys', async () => {
    expect(timeLimitedCache.set(1, 42,50)).toBeFalsy();
    expect(timeLimitedCache.set(2, 50,100)).toBeFalsy();
    await new Promise((r) => setTimeout(r, 30));
    expect(timeLimitedCache.get(1)).toBe(42);
    expect(timeLimitedCache.get(2)).toBe(50);
    expect(timeLimitedCache.set(2, 777,100)).toBeTruthy();
    await new Promise((r) => setTimeout(r, 50));
    expect(timeLimitedCache.get(1)).toBe(-1);
    expect(timeLimitedCache.get(2)).toBe(777);
    expect(timeLimitedCache.count()).toBe(1);
    await new Promise((r) => setTimeout(r, 70));
    expect(timeLimitedCache.get(1)).toBe(-1);
    expect(timeLimitedCache.get(2)).toBe(-1);
    expect(timeLimitedCache.count()).toBe(0);
  });
});
