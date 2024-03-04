type Fn = (...params: number[]) => number;

export const memoize = (fn: Fn): Fn => {
  const store = new Map<string, number>();

  return (...args) => {
    const key = args.toString();
    const item = store.get(key);

    if (item !== undefined) {
      return item;
    }

    const result = fn(...args);
    store.set(key, result);

    return result;
  };
};
