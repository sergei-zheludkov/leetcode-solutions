import { isPowerOfTwo } from './power-of-two';

describe('power of two', () => {
  test.each([1,16,64,256,1024])('truthy cases', (num) => {
    expect(isPowerOfTwo(num)).toBeTruthy();
  });

  test.each([3,55,77,100,1000])('falsy cases', (num) => {
    expect(isPowerOfTwo(num)).toBeFalsy();
  });
});
