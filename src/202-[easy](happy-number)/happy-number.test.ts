import { isHappy } from './happy-number';

describe('happy number', () => {
  test('truthy cases', () => {
    expect(isHappy(19)).toBeTruthy();
    expect(isHappy(23)).toBeTruthy();
    expect(isHappy(28)).toBeTruthy();
  });

  test('falsy cases', () => {
    expect(isHappy(2)).toBeFalsy();
    expect(isHappy(33)).toBeFalsy();
    expect(isHappy(11)).toBeFalsy();
    expect(isHappy(15)).toBeFalsy();
    expect(isHappy(101)).toBeFalsy();
    expect(isHappy(77)).toBeFalsy();
    expect(isHappy(1977)).toBeFalsy();
    expect(isHappy(6668)).toBeFalsy();
  });
});
