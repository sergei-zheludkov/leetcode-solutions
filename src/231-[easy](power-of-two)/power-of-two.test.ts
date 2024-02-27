import { isPowerOfTwo } from './power-of-two';

describe('power of two', () => {
  test('truthy cases', () => {
    expect(isPowerOfTwo(1)).toBeTruthy();
    expect(isPowerOfTwo(16)).toBeTruthy();
    expect(isPowerOfTwo(64)).toBeTruthy();
    expect(isPowerOfTwo(256)).toBeTruthy();
    expect(isPowerOfTwo(1024)).toBeTruthy();
  });

  test('falsy cases', () => {
    expect(isPowerOfTwo(3)).toBeFalsy();
    expect(isPowerOfTwo(55)).toBeFalsy();
    expect(isPowerOfTwo(77)).toBeFalsy();
    expect(isPowerOfTwo(100)).toBeFalsy();
    expect(isPowerOfTwo(1000)).toBeFalsy();
  });
});
