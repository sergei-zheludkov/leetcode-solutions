import { NumArray } from './range-sum-query-immutable';

describe('range sum query immutable', () => {
  test('positive sum', () => {
    const array = new NumArray([6, 5, 2, 3, 9, 7]);

    expect(array.sumRange(0, 3)).toBe(16);
    expect(array.sumRange(1, 4)).toBe(19);
    expect(array.sumRange(0, 5)).toBe(32);
  });

  test('negative sum', () => {
    const array = new NumArray([-2, -5, -3, -5, -2, -1]);

    expect(array.sumRange(0, 2)).toBe(-10);
    expect(array.sumRange(2, 5)).toBe(-11);
    expect(array.sumRange(0, 5)).toBe(-18);
  });

  test('combine sum', () => {
    const array = new NumArray([-2, 0, 3, -5, 2, -1]);

    expect(array.sumRange(0, 2)).toBe(1);
    expect(array.sumRange(2, 5)).toBe(-1);
    expect(array.sumRange(0, 5)).toBe(-3);
  });
});
