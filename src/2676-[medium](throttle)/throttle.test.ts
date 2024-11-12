import { throttle } from './throttle';


describe('throttle', () => {
  let values: number[] | null = null;

  const callback = (...args: number[]) => {
    values = args;
  };

  beforeEach(() => {
    values = [];
  });

  // -- TEST 1 --
  //   t: 100,
  //   calls: [
  //     { t: 20, inputs: [1] },
  //   ],
  //   expected: [
  //     { t: 20, inputs: [1] },
  //   ],

  test('first call should be without delay', async () => {
    const throttled = throttle(callback, 100);

    await new Promise(res => setTimeout(res, 20));

    throttled(1,2,3);

    expect(values).toEqual([1,2,3]);
  });

  // -- TEST 2 --
  //
  //   t: 50,
  //   calls: [
  //     { t: 50, inputs: [1] },
  //     { t: 75, inputs: [2] },
  //   ],
  //   expected: [
  //     { t: 50, inputs: [1] },
  //     { t: 100, inputs: [2] },
  //   ],

  test('first call should be without delay and second with throttle delay', async () => {
    const throttled = throttle(callback, 50);

    await new Promise(res => setTimeout(res, 50)); // ~50

    throttled(1);

    expect(values).toEqual([1]);

    await new Promise(res => setTimeout(res, 25)); // ~75

    throttled(2);

    expect(values).toEqual([1]);

    await new Promise(res => setTimeout(res, 30)); // ~100

    expect(values).toEqual([2]);
  });

  // -- TEST 3 --
  //
  //   t: 70,
  //   calls: [
  //     { t: 50, inputs: [1] },
  //     { t: 75, inputs: [2] },
  //     { t: 90, inputs: [8] },
  //     { t: 140,  inputs: [5,7] },
  //     { t: 300,  inputs : [9,4] },
  //   ],
  //   expected: [
  //     { t: 50, inputs: [1] },
  //     { t: 120, inputs: [8] },
  //     { t: 190, inputs: [5,7] },
  //     { t: 300, inputs: [9,4] },
  //   ],

  test('one of calls should be skipped', async () => {
    const throttled = throttle(callback, 70);

    await new Promise(res => setTimeout(res, 50)); // ~50

    throttled(1);

    expect(values).toEqual([1]);

    await new Promise(res => setTimeout(res, 25)); // ~75

    throttled(2);

    expect(values).toEqual([1]);

    await new Promise(res => setTimeout(res, 15)); // ~90

    throttled(8);

    expect(values).toEqual([1]);

    await new Promise(res => setTimeout(res, 30)); // ~120

    expect(values).toEqual([8]);

    await new Promise(res => setTimeout(res, 20)); // ~140

    throttled(5,7);

    expect(values).toEqual([8]);

    await new Promise(res => setTimeout(res, 50)); // ~190

    expect(values).toEqual([5,7]);

    await new Promise(res => setTimeout(res, 100));

    expect(values).toEqual([5,7]);

    await new Promise(res => setTimeout(res, 10)); // ~300

    throttled(9,4);

    expect(values).toEqual([9,4]);
  });
});
