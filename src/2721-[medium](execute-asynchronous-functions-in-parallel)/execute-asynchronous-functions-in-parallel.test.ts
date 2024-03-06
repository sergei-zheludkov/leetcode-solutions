import { promiseAll } from './execute-asynchronous-functions-in-parallel';

describe('execute asynchronous functions in parallel', () => {
  test('single function case', async () => {
    const functions = [
      () => new Promise(resolve => setTimeout(() => resolve(5), 200)),
    ];

    const result = await promiseAll(functions);
    expect(result).toEqual( [5]);
  });

  test('many functions case', async () => {
    const functions = [
      () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
      () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
      () => new Promise(resolve => setTimeout(() => resolve(16), 100)),
    ];

    const result = await promiseAll(functions);
    expect(result).toEqual( [4,10,16]);
  });

  test('reject case', async () => {
    const functions = [
      () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
      () => new Promise((resolve, reject) => setTimeout(() => reject('Error'), 100)),
    ];

    try {
      await promiseAll(functions);
    } catch (error) {
      expect(error).toBe( 'Error');
    }
  });
});
