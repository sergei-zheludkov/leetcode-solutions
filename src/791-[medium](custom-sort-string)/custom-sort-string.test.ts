import { customSortString } from './custom-sort-string';

test.each([
  { order: 'cba', str: 'abcd', expected: 'cbad' },
  { order: 'bcafg', str: 'abcd', expected: 'bcad' },
  { order: 'iokpn', str: 'kinoopw', expected: 'iookpnw' },
  { order: 'a', str: 'b', expected: 'b' },
  { order: 'abc', str: 'b', expected: 'b' },
  { order: 'a', str: 'bodl', expected: 'bodl' },
  { order: 'cbplak', str: 'krtakpmfbn', expected: 'bpakkrtmfn' },
])('custom sort string', ({ order, str, expected }) => {
  expect(customSortString(order, str)).toBe(expected);
});
