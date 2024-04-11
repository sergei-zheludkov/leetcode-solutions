import { removeKdigits } from './remove-k-digits';

test.each([
  { num: '9', k: 1, expected: '0' },
  { num: '10', k: 2, expected: '0' },
  { num: '100', k: 1, expected: '0' },
  { num: '112', k: 1, expected: '11' },
  { num: '10200', k: 1, expected: '200' },
  { num: '1432219', k: 4, expected: '119' },
  { num: '1432219', k: 3, expected: '1219' },
  { num: '87328472', k: 4, expected: '2472' },
  { num: '987654321', k: 5, expected: '4321' },
  { num: '993847242', k: 4, expected: '34242' },
  { num: '2743921183', k: 5, expected: '21183' },
])('remove k digits', ({ num, k, expected }) => {
  expect(removeKdigits(num, k)).toBe(expected);
});
