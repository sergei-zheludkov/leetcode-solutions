import { containsDuplicate } from './contains-duplicate';

describe('contains duplicate', () => {
  test('truthy cases', () => {
    expect(containsDuplicate([0,0])).toBeTruthy();
    expect(containsDuplicate([1,1,1])).toBeTruthy();
    expect(containsDuplicate([1,2,3,1])).toBeTruthy();
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBeTruthy();
  });

  test('falsy cases', () => {
    expect(containsDuplicate([0])).toBeFalsy();
    expect(containsDuplicate([1,11])).toBeFalsy();
    expect(containsDuplicate([1,2,3,4])).toBeFalsy();
    expect(containsDuplicate([1,10,100,1000])).toBeFalsy();
  });
});
