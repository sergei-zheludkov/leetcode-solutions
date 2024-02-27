type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

export const argumentsLength = (...args: JSONValue[]): number => args.length;
