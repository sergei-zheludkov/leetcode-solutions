import { compactObject } from './compact-object';

test.each([
  { object: [null, 0, false, 1], expected: [1] },
  { object: { a: null, b: [false, 1] }, expected: { b: [1] } },
  { object: [null, 0, 5, [0], [false, 16]], expected: [5, [], [16]] },
])('compact object', ({ object, expected }) => {
  expect(compactObject(object)).toEqual(expected);
});
