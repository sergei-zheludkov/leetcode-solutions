import { majorityElement } from './majority-element';

test('majority element', () => {
  expect(majorityElement([1])).toBe(1);
  expect(majorityElement([3,2,3])).toBe(3);
  expect(majorityElement([3,3,4])).toBe(3);
  expect(majorityElement([2,2,1,1,1,2,2])).toBe(2);
});
