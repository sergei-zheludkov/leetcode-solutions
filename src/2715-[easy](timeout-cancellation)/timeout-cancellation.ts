import type { JSONValue } from '../types';

type Fn = (...args: JSONValue[]) => void

export const cancellable = (fn: Fn, args: JSONValue[], t: number) => {
  const timeoutID = setTimeout(() => fn(...args), t);

  return () => clearTimeout(timeoutID);
};
