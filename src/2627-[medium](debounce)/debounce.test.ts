import { debounce } from './debounce';

describe('debounce', () => {
  const result: number[] = [];

  const setResult = (n: number) => {
    result.push(n);
  };

  beforeEach(() => {
    result.length = 0;
  });


  test('recalled', async () => {
    const fn = debounce(setResult, 50);

    fn(1);
    await new Promise((r) => setTimeout(r, 25));
    expect(result).toEqual([]);

    fn(2);
    await new Promise((r) => setTimeout(r, 55));
    expect(result).toEqual([2]);
  });

  test('all called', async () => {
    const fn = debounce(setResult, 20);

    fn(1);
    await new Promise((r) => setTimeout(r, 50));
    expect(result).toEqual([1]);

    fn(2);
    await new Promise((r) => setTimeout(r, 50));
    expect(result).toEqual([1,2]);
  });

  test('partially called', async () => {
    const fn = debounce(setResult, 150);

    fn(1);
    await new Promise((r) => setTimeout(r, 250));
    expect(result).toEqual([1]);

    fn(2);
    fn(3);
    await new Promise((r) => setTimeout(r, 200));
    expect(result).toEqual([1,3]);
  });
});
