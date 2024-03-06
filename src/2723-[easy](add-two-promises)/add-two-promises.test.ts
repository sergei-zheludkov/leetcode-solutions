import { addTwoPromises } from './add-two-promises';

describe('add two promises', () => {
  test('the first case', async () => {
    const promise1: Promise<number> = new Promise(resolve => setTimeout(() => resolve(2), 20));
    const promise2: Promise<number> = new Promise(resolve => setTimeout(() => resolve(5), 60));

    expect(addTwoPromises(promise1, promise2)).resolves.toBe(7);
  });

  test('the second case', async () => {
    const promise1: Promise<number> = new Promise(resolve => setTimeout(() => resolve(10), 50));
    const promise2: Promise<number> = new Promise(resolve => setTimeout(() => resolve(-12), 30));
    
    expect(addTwoPromises(promise1, promise2)).resolves.toBe(-2);
  });
});