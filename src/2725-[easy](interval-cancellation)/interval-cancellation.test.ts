import { cancellable } from './interval-cancellation';

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

test.each([
  { time: 0, index: 0 },
  { time: 35, index: 1 },
  { time: 70, index: 2 },
  { time: 105, index: 3 },
  { time: 140, index: 4 },
  { time: 175, index: 5 },
])('interval cancellation', async ({ /* time, */ index }) => {
  const result: Array<{ time: number; returned: number}> = [];

  const fn = (x: number) => x * 2;
  const args = [4], t = 35, cancelTimeMs = 190;

  const start = performance.now();

  const log = (...argsArr: JSONValue[] ) => {
    const diff = Math.floor(performance.now() - start);
    const n = argsArr[0] as number;

    result.push({ time: diff, returned: fn(n) });
  };

  const cancel = cancellable(log, args, t);

  setTimeout(cancel, cancelTimeMs);

  await new Promise((r) => setTimeout(r, cancelTimeMs + t + 15));

  // expect(result[index].time).toBeGreaterThanOrEqual(time);
  expect(result[index].returned).toBe(8);
});
