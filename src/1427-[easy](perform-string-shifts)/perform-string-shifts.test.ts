import { stringShift } from './perform-string-shifts';

test.each<{
  shift: Array<[number, number]>;
  str: string;
  expected: string;
}>([
  { shift: [[0,1],[1,2]], str: 'abc', expected: 'cab' },
  { shift: [[0,1]], str: 'abc', expected: 'bca' },
  { shift: [[1,1],[1,1],[0,2],[1,3]], str: 'abcdefg', expected: 'efgabcd' },
  { shift: [[0,3],[1,2],[1,4],[0,2],[1,5]], str: 'premiumalgo', expected: 'umalgopremi' },
  { shift: [[0,3],[1,2],[0,4],[0,2],[0,5]], str: 'premiumalgo', expected: 'remiumalgop' },
  { shift: [[1,3],[1,1],[0,2],[1,3],[0,3],[1,3],[1,5]], str: 'kukareku', expected: 'kukukare' },

])('perform string shifts', ({ shift, str, expected }) => {
  expect(stringShift(str, shift)).toEqual(expected);
});
