type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

// eslint-disable-next-line @typescript-eslint/ban-types
export const once = (fn: Function): OnceFn => {
  let canBeCalled = true;

  return (...args) => {
    if (canBeCalled) {
      canBeCalled = false;
      return fn(...args);
    }
  };
};
