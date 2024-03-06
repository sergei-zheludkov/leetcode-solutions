/* eslint-disable @typescript-eslint/ban-ts-comment */
import { groupBy } from './group-by';

// @ts-ignore
Array.prototype.groupBy = groupBy;

test.each([
  {
    array: [{ id:'1' }, { id:'1' }, { id:'2' }],
    func: (item: { id: string }) => item.id,
    expected: { 1: [{ id: '1' }, { id: '1' }], 2: [{ id: '2' }] },
  },
  {
    array: [[1, 2, 3], [1, 3, 5], [1, 5, 9]],
    func: (list: number[]) => String(list[0]),
    expected: { 1: [[1, 2, 3], [1, 3, 5], [1, 5, 9]] },
  },
  {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    func: (n: number) => String(n > 5),
    expected: { true: [6, 7, 8, 9, 10], false: [1, 2, 3, 4, 5] },
  },
])('group by', ({ array, func, expected }) => {
  // @ts-ignore
  expect(array.groupBy(func)).toEqual(expected);
});

