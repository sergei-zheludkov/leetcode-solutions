import { uniqueOccurrences } from './unique-number-of-occurrences';

describe('unique number of occurrences', () => {
  test.each([
    { arr: [1,2,2,1,1,3] },
    { arr: [3,1,4,2,4,2,3,4,3,4] },
  ])('truthy cases', ({ arr }) => {
    expect(uniqueOccurrences(arr)).toBeTruthy();
  });

  test.each([
    { arr: [1,2,3] },
    { arr: [1,1,2,3] },
    { arr: [1,1,2,2,3] },
  ])('falsy cases', ({ arr }) => {
    expect(uniqueOccurrences(arr)).toBeFalsy();
  });
});
