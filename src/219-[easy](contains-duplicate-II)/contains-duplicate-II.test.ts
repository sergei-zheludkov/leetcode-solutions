import { containsNearbyDuplicate } from './contains-duplicate-II';

describe('contains duplicate II', () => {
  test('truthy cases', () => {
    expect(containsNearbyDuplicate([1,2,3,1], 3)).toBeTruthy();
    expect(containsNearbyDuplicate([1,0,1,1], 1)).toBeTruthy();
    expect(containsNearbyDuplicate([1,2,3,1,2,3], 3)).toBeTruthy();
  });

  test('falsy cases', () => {
    expect(containsNearbyDuplicate([1,2,3,1], 2)).toBeFalsy();
    expect(containsNearbyDuplicate([1,2,3,1,2,3], 2)).toBeFalsy();
  });
});
