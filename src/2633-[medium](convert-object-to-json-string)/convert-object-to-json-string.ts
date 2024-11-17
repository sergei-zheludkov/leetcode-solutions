import type { JSONValue } from '../types';

export const jsonStringify = (object: JSONValue): string => {
  if (typeof object === 'string') {
    return `"${object}"`;
  }

  if (typeof object === 'number') {
    return `${object}`;
  }

  if (typeof object === 'boolean') {
    return `${object}`;
  }

  if (object === null) {
    return 'null';
  }

  if (Array.isArray(object)) {
    return `[${object.reduce((acc, item, i) => `${acc}${i ? ',' : ''}${jsonStringify(item)}`, '')}]`;
  }

  const result = Object.entries(object)
    .reduce((acc, [key, value], i) => `${acc}${i ? ',' : ''}"${key}":${jsonStringify(value)}`, '');

  return `{${result}}`;
};
