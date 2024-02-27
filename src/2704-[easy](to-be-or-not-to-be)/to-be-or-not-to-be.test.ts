import { expect as expectFunc } from './to-be-or-not-to-be';


describe(('to be or not to be'), () => {
  test('truthy cases', () => {
    expect(expectFunc(5).toBe(5)).toBeTruthy();
    expect(expectFunc(10 - 5).toBe(5)).toBeTruthy();
    expect(expectFunc(5 - 5).toBe(0)).toBeTruthy();
    expect(expectFunc('5' + '5').toBe('55')).toBeTruthy();

    expect(expectFunc(5).notToBe(6)).toBeTruthy();
    expect(expectFunc(10 - 5).notToBe(10)).toBeTruthy();
    expect(expectFunc(5 - 5).notToBe(5)).toBeTruthy();
    expect(expectFunc('5' + '5').notToBe(10)).toBeTruthy();
  });

  test('exception cases', () => {
    // expect(expectFunc(5).toBe(6)).toThrow('Not Equal');
    // expect(expectFunc(10 - 5).toBe(10)).toThrow("Not Equal");
    // expect(expectFunc(5 - 5).toBe(5)).toThrow("Not Equal");
    // expect(expectFunc("5" + "5").toBe(10)).toThrow("Not Equal");
    //
    // expect(expectFunc(5).notToBe(5)).toThrow("Equal");
    // expect(expectFunc(10 - 5).notToBe(5)).toThrow("Equal");
    // expect(expectFunc(5 - 5).notToBe(0)).toThrow("Equal");
    // expect(expectFunc("5" + "5").notToBe("55")).toThrow("Equal");
  });
});

