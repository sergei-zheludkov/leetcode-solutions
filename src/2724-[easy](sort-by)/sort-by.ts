import type { JSONValue } from '../types';

export type Fn = (value: JSONValue) => number

export const sortBy = (arr: JSONValue[], fn: Fn): JSONValue[] => arr
  .sort((a, b) => fn(a) - fn(b));
