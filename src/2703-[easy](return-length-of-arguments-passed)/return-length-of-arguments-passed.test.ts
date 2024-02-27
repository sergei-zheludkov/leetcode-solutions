import { argumentsLength } from './return-length-of-arguments-passed';

test('return length of arguments passed', () => {
  expect(argumentsLength()).toBe(0);
  expect(argumentsLength(5)).toBe(1);
  expect(argumentsLength({}, null, '3')).toBe(3);
  expect(argumentsLength({}, null, '3', null, 5)).toBe(5);
  expect(argumentsLength({}, null, '3', null, 5, 6)).toBe(6);
  expect(argumentsLength({}, null, '3', '', 5, [], 7)).toBe(7);
});
