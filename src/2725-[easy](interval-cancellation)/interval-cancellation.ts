import type { JSONValue } from '../types';

type Fn = (...args: JSONValue[]) => void

export const cancellable = (fn: Fn, args: JSONValue[], t: number) => {
  fn(...args);

  const intervalID = setInterval(() => fn(...args), t);

  return () => clearInterval(intervalID);
};
