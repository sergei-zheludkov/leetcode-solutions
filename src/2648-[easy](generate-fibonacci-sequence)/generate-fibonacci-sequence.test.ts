import { fibGenerator } from './generate-fibonacci-sequence';

test.each([
  { expected: [] },
  { expected: [0,1,1,2,3] },
  { expected: [0,1,1,2,3,5,8,13,21,34] },
])('generate fibonacci sequence', ({ expected }) => {
  const gen = fibGenerator();

  expected.forEach((num) => {
    expect(gen.next().value).toBe(num);
  });
});