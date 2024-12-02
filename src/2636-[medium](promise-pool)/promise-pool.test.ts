import { promisePool } from './promise-pool';

const sleep = (t: number) => new Promise(res => setTimeout(res, t));


describe('promise pool', () => {
  test('pool size less than callback count', async () => {

    const start_time = new Date().getTime();

    await promisePool([() => sleep(500), () => sleep(400)], 1);

    const end_time = new Date().getTime();

    const diff = end_time - start_time;

    expect(diff).toBeGreaterThanOrEqual(900);
    expect(diff).toBeLessThan(920);
  });

  test('pool size more than callback count', async () => {

    const start_time = new Date().getTime();

    await promisePool([() => sleep(300), () => sleep(400), () => sleep(200)], 5);

    const end_time = new Date().getTime();

    const diff = end_time - start_time;

    expect(diff).toBeGreaterThanOrEqual(400);
    expect(diff).toBeLessThan(420);
  });

  test('pool size equal one', async () => {

    const start_time = new Date().getTime();

    await promisePool([() => sleep(300), () => sleep(400), () => sleep(200)], 1);

    const end_time = new Date().getTime();

    const diff = end_time - start_time;

    expect(diff).toBeGreaterThanOrEqual(900);
    expect(diff).toBeLessThan(920);
  });

  test('pool size equal two', async () => {

    const start_time = new Date().getTime();

    await promisePool([() => sleep(300), () => sleep(400), () => sleep(200)], 2);

    const end_time = new Date().getTime();

    const diff = end_time - start_time;

    expect(diff).toBeGreaterThanOrEqual(500);
    expect(diff).toBeLessThan(520);
  });

});
