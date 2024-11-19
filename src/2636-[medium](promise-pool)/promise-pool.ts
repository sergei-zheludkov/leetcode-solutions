type F = () => Promise<unknown>;

export const promisePool = async (functions: F[], n: number): Promise<unknown> => {
  const resolveHandler = async () => {
    const cb = functions.shift();

    if (~functions.length && cb) {
      await cb().then(() => resolveHandler());
    }
  };

  return Promise.all(functions.splice(0, n).map((cb) => cb().then(() => resolveHandler())));
};
