import { areDeeplyEqual, JSONValue } from './json-deep-equal';

const object = {};

describe('json deep equal', () => {
  test.each<{ object1: JSONValue; object2: JSONValue }>([
    { object1: 5, object2: 5 },
    { object1: 'hello', object2: 'hello' },
    { object1: null, object2: null },
    { object1: object, object2: object },
    { object1: {}, object2: {} },
    { object1: [], object2: [] },
    { object1: [1,2,3,4,5], object2: [1,2,3,4,5] },
    { object1: { 'x': 1,'y': 2 }, object2: { x: 1, y: 2 } },
    { object1: { x: 1, y: 2 }, object2: { 'y': 2,'x': 1 } },
    { object1: [null, { x: 1, y: { x: 1, y: 2 } }, 10], object2: [null, { 'y': { x: 1, y: 2 },'x': 1 }, 10] },
  ])('truthy cases', ({ object1, object2 }) => {
    expect(areDeeplyEqual(object1, object2)).toBe(true);
  });

  test.each<{ object1: JSONValue; object2: JSONValue }>([
    { object1: {}, object2: [] },
    { object1: { 'x':1 }, object2: { 'x':1, 'y':2 } },
    { object1: [1,2,3], object2: [2,4,6] },
    { object1: [1,2,3], object2: [1,2,3,4] },
    { object1: 'hello', object2: 'world' },
    { object1: null, object2: NaN },
    { object1: [1, [2, 3], { a: 4 }], object2: [1, [2, 4], { a: 4 }] },
    { object1: [1,['a', 'cb'],3], object2: [2, { 'ab': 1, 'c': 2 } ,6] },
    { object1: ['a', 'cb'], object2: { 'ab': 1, 'c': 2 } },
    { object1: { x: null, L: [1,2,3] }, object2: { x: null, L:['1','2','3'] } },
  ])('falsy cases', ({ object1, object2 }) => {
    expect(areDeeplyEqual(object1, object2)).toBe(false);
  });
});


