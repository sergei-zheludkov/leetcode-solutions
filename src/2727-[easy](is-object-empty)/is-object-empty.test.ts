import { isEmpty, Obj } from './is-object-empty';

describe('is object empty', () => {
  test.each<Obj>([{}, []])('truthy cases', (obj) => {
    expect(isEmpty(obj)).toBeTruthy();
  });

  test.each<Obj>([{ x: 5, y: 42 }, [null, false, 0], { '': '' }])('falsy cases', (obj) => {
    expect(isEmpty(obj)).toBeFalsy();
  });
});
