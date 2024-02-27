import { createHelloWorld } from './create-hello-world-function';

const func = createHelloWorld();
const result = 'Hello World';

test('create hello world function', () => {
  expect(func('()')).toBe(result);
  expect(func([])).toBe(result);
  expect(func({}, null, 42)).toBe(result);
  expect(func(2, 3, [], '')).toBe(result);
  expect(func()).toBe(result);
});
