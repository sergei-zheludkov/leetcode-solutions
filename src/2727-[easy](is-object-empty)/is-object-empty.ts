type JSONValue = null | undefined | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

export const isEmpty = (obj: Obj): boolean => {
  if (Array.isArray(obj) && obj.length) {
    return false;
  }

  for (const property in obj) {
    return property === undefined;
  }

  return true;
};
