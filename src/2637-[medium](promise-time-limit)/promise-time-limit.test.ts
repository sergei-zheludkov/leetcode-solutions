import { timeLimit } from './promise-time-limit';

describe('timeout cancellation', () => {
  test('should be canceled', async () => {
    const fn = async (x: unknown) => {
      const n = x as number;
      await new Promise(res => setTimeout(res, 100));
      return n * n;
    };

    const inputs = [5], t = 50;

    const limited = timeLimit(fn, t);
    const start = performance.now();

    let result;

    try {
      const res = await limited(...inputs);
      result = {
        resolved: res,
        time: Math.floor(performance.now() - start),
      };
    } catch (err) {
      result = {
        rejected: err,
        time: Math.floor(performance.now() - start),
      };
    }

    expect(result.rejected).toBe('Time Limit Exceeded');
    // expect(result.time).toBeGreaterThanOrEqual(50);
    // expect(result.time).toBeLessThan(55);
  });

  test('should return result', async () => {
    const fn = async (a: unknown, b: unknown) => {
      const x = a as number;
      const y = b as number;

      await new Promise(res => setTimeout(res, 115));
      return x + y;
    };

    const inputs = [5,10], t = 150;

    const limited = timeLimit(fn, t);
    const start = performance.now();

    let result;

    try {
      const res = await limited(...inputs);
      result = {
        resolved: res,
        time: Math.floor(performance.now() - start),
      };
    } catch (err) {
      result = {
        rejected: err,
        time: Math.floor(performance.now() - start),
      };
    }

    expect(result.resolved).toBe( 15);
    // expect(result.time).toBeGreaterThanOrEqual( 115);
  });

  test('error case', async () => {
    const fn = async () => {
      throw 'Error';
    };

    const t = 1000;

    const limited = timeLimit(fn, t);
    const start = performance.now();

    let result;

    try {
      const res = await limited();
      result = {
        resolved: res,
        time: Math.floor(performance.now() - start),
      };
    } catch (err) {
      result = {
        rejected: err,
        time: Math.floor(performance.now() - start),
      };
    }

    expect(result.rejected).toBe('Error');
    expect(result.time).toBe( 0);
  });
});
