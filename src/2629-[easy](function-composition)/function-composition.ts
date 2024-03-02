type F = (x: number) => number;

export const compose = (functions: F[]): F => (x) => {
  const callback = functions.shift();

  if (!callback) {
    return x;
  }

  return callback(compose(functions)(x));
};
