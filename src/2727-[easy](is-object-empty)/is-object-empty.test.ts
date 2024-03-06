import { isEmpty } from './is-object-empty';

describe('is object empty', () => {
  test.each([{}, []])('truthy cases', (obj) => {
    expect(isEmpty(obj)).toBeTruthy();
  });

  test.each([{ x: 5, y: 42 }, [null, false, 0], { '': '' }])('falsy cases', (obj) => {
    expect(isEmpty(obj)).toBeFalsy();
  });
});
