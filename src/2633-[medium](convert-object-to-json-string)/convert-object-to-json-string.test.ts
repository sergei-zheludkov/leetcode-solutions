import { jsonStringify } from './convert-object-to-json-string';
import { JSONValue } from '../types';

test.each<{
  object: JSONValue;
  expected: string;
}>([
  {
    object: true,
    expected: 'true',
  },
  {
    object: false,
    expected: 'false',
  },
  {
    object: null,
    expected: 'null',
  },
  {
    object: [5,null,'Hello'],
    expected: '[5,null,"Hello"]',
  },
  {
    object: { y: 1, x: 2 },
    expected: '{"y":1,"x":2}',
  },
  {
    object: { a: 'str', b: -12, c: true, d: null },
    expected: '{"a":"str","b":-12,"c":true,"d":null}',
  },
  {
    object: { key: { a: 1, b: [{},null,'Hello'] } },
    expected: '{"key":{"a":1,"b":[{},null,"Hello"]}}',
  },
])('convert object to json string', ({ object, expected }) => {
  expect(jsonStringify(object)).toBe(expected);
});

