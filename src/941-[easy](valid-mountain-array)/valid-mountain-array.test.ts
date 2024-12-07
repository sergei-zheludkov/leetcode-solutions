import { validMountainArray } from './valid-mountain-array';

describe('valid mountain array', () => {
  test.each([
    { arr: [1,3,2] },
    { arr: [0,3,2,1] },
    { arr: [0,2,3,4,5,2,1,0] },
    { arr: [1,2,3,4,5,4,3,2,1] },
  ])('truthy cases', ({ arr }) => {
    expect(validMountainArray(arr)).toBeTruthy();
  });

  test.each([
    { arr: [2] },
    { arr: [2,1] },
    { arr: [3,5,5] },
    { arr: [5,4,3,2] },
    { arr: [0,3,2,2,1] },
    { arr: [0,2,3,3,5,2,1,0] },
    { arr: [1,2,3,4,3,4,2,1] },
    { arr: [1,2,3,4,5,4,3,2,1,2] },
    { arr: [0,1,2,3,4,5,6,7,8,9] },
  ])('falsy cases', ({ arr }) => {
    expect(validMountainArray(arr)).toBeFalsy();
  });
});


