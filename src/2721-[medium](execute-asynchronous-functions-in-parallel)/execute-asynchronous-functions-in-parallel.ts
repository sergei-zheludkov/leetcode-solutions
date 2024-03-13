type Fn<T> = () => Promise<T>

export const promiseAll = <T>(functions: Fn<T>[]): Promise<T[]> =>
  Promise.all(functions.map((fn) => fn()));
