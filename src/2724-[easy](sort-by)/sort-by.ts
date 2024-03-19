export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
export type Fn = (value: JSONValue) => number

export const sortBy = (arr: JSONValue[], fn: Fn): JSONValue[] => arr
  .sort((a, b) => fn(a) - fn(b));
