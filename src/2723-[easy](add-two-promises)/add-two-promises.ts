type P = Promise<number>

export const addTwoPromises = async (promise1: P, promise2: P) => (await promise1) + (await promise2);
