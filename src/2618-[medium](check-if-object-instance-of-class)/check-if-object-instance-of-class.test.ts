/* eslint-disable @typescript-eslint/ban-ts-comment */

import { checkIfInstanceOf } from './check-if-object-instance-of-class';

class Animal {}
class Dog extends Animal {}

describe('check if object instance of class', () => {
  test.each([
    { obj: new Date(), classFunction: Date },
    { obj: new Dog(), classFunction: Animal },
    { obj: 'test', classFunction: String },
    { obj: true, classFunction: Boolean },
    { obj: 5, classFunction: Number },
    // @ts-ignore
    { obj: 5n, classFunction: Object },
  ])('truthy cases', ({ obj, classFunction }) => {
    expect(checkIfInstanceOf(obj, classFunction)).toBeTruthy();
  });

  test.each([
    { obj: Date, classFunction: Date },
    { obj: new Date(), classFunction: new Date() },
    { obj: new Dog(), classFunction: Date },
    { obj: NaN, classFunction: Boolean },
    { obj: undefined, classFunction: Object },
  ])('falsy cases', ({ obj, classFunction }) => {
    expect(checkIfInstanceOf(obj, classFunction)).toBeFalsy();
  });
});


