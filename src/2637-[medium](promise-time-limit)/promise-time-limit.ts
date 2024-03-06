type Fn = (...params: unknown[]) => Promise<unknown>;

const TIME_ERROR = 'Time Limit Exceeded';

export const timeLimit = (fn: Fn, t: number): Fn => {
  return async (...args) => {
    const promise = fn(...args);

    return new Promise((resolve, reject) => {
      promise.then(resolve).catch(reject);

      setTimeout( async () => {
        reject(TIME_ERROR);
      }, t);
    });
  };
};
