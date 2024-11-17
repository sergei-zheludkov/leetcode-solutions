import type { JSONValue } from '../types';

export const argumentsLength = (...args: JSONValue[]): number => args.length;
