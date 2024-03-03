import { once } from './allow-one-function-call';

describe('allow one function call', () => {
  test('first case', () => {
    const onceFn = once((a: number, b: number, c: number) => (a + b + c));

    expect(onceFn(1, 2, 3)).toBe(6);
    expect(onceFn(2, 3, 6)).toBeUndefined();
  });

  test('second case', () => {
    const onceFn = once((a: number, b: number, c: number) => (a * b * c));

    expect(onceFn(5, 7, 4)).toBe(140);
    expect(onceFn(2, 3, 6)).toBeUndefined();
    expect(onceFn(4, 6, 8)).toBeUndefined();
  });
});
