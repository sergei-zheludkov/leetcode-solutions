import { convertToTitle } from './excel-sheet-column-title';

test.each([
  { num: 1, expected: 'A' },
  { num: 28, expected: 'AB' },
  { num: 701, expected: 'ZY' },
  { num: 10002, expected: 'NTR' },
  { num: 100020, expected: 'EQXX' },
  { num: 123820, expected: 'GADH' },
])('excel sheet column title', ({ num, expected }) => {
  expect(convertToTitle(num)).toBe(expected);
});
