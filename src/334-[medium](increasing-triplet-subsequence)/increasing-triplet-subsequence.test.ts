import { increasingTriplet } from './increasing-triplet-subsequence';

describe('increasing triplet subsequence', () => {
  test.each([
    { nums: [1,2,3,4,5] },
    { nums: [2,1,5,0,4,6] },
    { nums: [2,1,5,0,7,6] },
  ])('truthy cases', ({ nums }) => {
    expect(increasingTriplet(nums)).toBeTruthy();
  });

  test.each([
    { nums: [5,4,3,2,1] },
    { nums: [1,5,4,3,2] },
  ])('falsy cases', ({ nums }) => {
    expect(increasingTriplet(nums)).toBeFalsy();
  });
});


