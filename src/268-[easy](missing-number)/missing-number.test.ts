import { missingNumber } from './missing-number';

test('missing number', () => {
  expect(missingNumber([])).toBe(0);
  expect(missingNumber([0])).toBe(1);
  expect(missingNumber([0, 1])).toBe(2);
  expect(missingNumber([3, 0, 1])).toBe(2);
  expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
  expect(missingNumber([9, 14, 6, 4, 12, 2, 8, 3, 5, 7, 10, 11, 0, 1])).toBe(13);
});
