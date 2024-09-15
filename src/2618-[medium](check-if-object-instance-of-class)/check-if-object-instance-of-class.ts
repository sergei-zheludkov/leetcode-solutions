export const checkIfInstanceOf = (obj: unknown, classFunction: unknown): boolean =>
  obj != null && typeof classFunction === 'function' && Object(obj) instanceof classFunction;
