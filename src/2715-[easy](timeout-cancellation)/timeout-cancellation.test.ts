import { cancellable } from './timeout-cancellation';

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

describe('timeout cancellation', () => {
  test('should return result', async () => {
    const result: Array<{ time: number; returned: number}> = [];

    const fn = (x: number) => x * 5;
    const args = [2], t = 20, cancelTimeMs = 50;

    const start = performance.now();

    const log = (...argsArr: JSONValue[] ) => {
      const diff = Math.floor(performance.now() - start);
      const n = argsArr[0] as number;

      result.push({ time: diff, returned: fn(n) });
    };

    const cancel = cancellable(log, args, t);
    const maxT = Math.max(t, cancelTimeMs);

    setTimeout(cancel, cancelTimeMs);

    await new Promise((r) => setTimeout(r, maxT + 15));
    expect(result[0].returned).toBe( 10);
  });

  test('should be canceled', async () => {
    const result: Array<{ time: number; returned: number}> = [];

    const fn = (x: number) => x ** 5;
    const args = [2], t = 100, cancelTimeMs = 50;

    const start = performance.now();

    const log = (...argsArr: JSONValue[] ) => {
      const diff = Math.floor(performance.now() - start);
      const n = argsArr[0] as number;

      result.push({ time: diff, returned: fn(n) });
    };

    const cancel = cancellable(log, args, t);
    const maxT = Math.max(t, cancelTimeMs);

    setTimeout(cancel, cancelTimeMs);

    await new Promise((r) => setTimeout(r, maxT + 15));
    expect(result).toEqual([]);
  });
});
