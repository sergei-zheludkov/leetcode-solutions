import { clearDigits } from './clear-digits';

test.each([
  { str: 'cb34', expected: '' },
  { str: 'abc', expected: 'abc' },
  { str: 'a3b4c', expected: 'c' },
])('clear digits', ({ str, expected }) => {
  expect(clearDigits(str)).toBe(expected);
});
