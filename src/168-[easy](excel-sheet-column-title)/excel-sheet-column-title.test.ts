import { convertToTitle } from './excel-sheet-column-title';

test('excel sheet column title', () => {
  expect(convertToTitle(1)).toBe('A');
  expect(convertToTitle(28)).toBe('AB');
  expect(convertToTitle(701)).toBe('ZY');
  expect(convertToTitle(10002)).toBe('NTR');
  expect(convertToTitle(100020)).toBe('EQXX');
  expect(convertToTitle(123820)).toBe('GADH');
});
