import { titleToNumber } from './excel-sheet-column-number';

test.each([
  { title: 'A', num: 1 },
  { title: 'AB', num: 28 },
  { title: 'ZY', num: 701 },
  { title: 'NTR', num: 10002 },
  { title: 'EQXX', num: 100020 },
  { title: 'GADH', num: 123820 },
])('excel sheet column number', ({ title, num }) => {
  expect(titleToNumber(title)).toBe(num);
});
