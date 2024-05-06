import { merge } from './merge-intervals';

test.each([
  {
    intervals: [[1,4]],
    expected: [[1,4]],
  },
  {
    intervals: [[1,4], [1,4]],
    expected: [[1,4]],
  },
  {
    intervals: [[1,4],[4,5]],
    expected: [[1,5]],
  },
  {
    intervals: [[1,3],[2,6],[8,10],[15,18]],
    expected: [[1,6],[8,10],[15,18]],
  },
  {
    intervals: [[8,10],[2,6],[15,18],[1,3]],
    expected: [[1,6],[8,10],[15,18]],
  },
  {
    intervals: [[2,3],[4,5],[6,7],[8,9],[1,10]],
    expected: [[1,10]],
  },
  {
    intervals: [[1,3],[0,4],[5,10],[8,18],[10,12],[20,22],[21,25],[24,27]],
    expected: [[0,4],[5,18],[20,27]],
  },
])('merge intervals', ({ intervals, expected }) => {
  expect(merge(intervals)).toEqual(expected);
});
