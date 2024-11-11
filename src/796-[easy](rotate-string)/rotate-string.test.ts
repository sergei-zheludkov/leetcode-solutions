import { rotateString } from './rotate-string';

describe('rotate string', () => {
  test.each([
    { str: 'abcde', goal: 'cdeab' },
    { str: 'abcdefghi', goal: 'efghiabcd' },
  ])('truthy cases', ({ str, goal }) => {
    expect(rotateString(str, goal)).toBeTruthy();
  });

  test.each([
    { str: 'abcde', goal: 'abced' },
    { str: 'abcdefghi', goal: 'abcdghief' },
  ])('falsy cases', ({ str, goal }) => {
    expect(rotateString(str, goal)).toBeFalsy();
  });
});
