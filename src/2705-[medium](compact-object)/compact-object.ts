import type { JSONValue } from '../types';

type Obj = Record<string, JSONValue> | Array<JSONValue>;

export const compactObject = (obj: Obj): Obj => {
  if (Array.isArray(obj)) {
    const result: Obj = [];

    for (const item of obj) {
      if (!item) {
        continue;
      }

      if (typeof item === 'object') {
        result.push(compactObject(item));
      } else {
        result.push(item);
      }
    }

    return result;
  }

  const result: Obj = {};

  for (const key in obj) {
    const item = obj[key];

    if (!item) {
      continue;
    }

    if (typeof item === 'object') {
      result[key] = compactObject(item);
    } else {
      result[key] = item;
    }
  }

  return result;
};
