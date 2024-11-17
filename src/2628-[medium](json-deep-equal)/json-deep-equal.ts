export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

export const areDeeplyEqual = (o1: JSONValue, o2: JSONValue): boolean => {
  if (o1 === o2) {
    return true;
  }

  if (typeof o1 !== typeof o2) {
    return false;
  }

  if (Array.isArray(o1) && Array.isArray(o2)) {
    if (o1.length !== o2.length) {
      return false;
    }

    return o1.every((elem, index) => areDeeplyEqual(elem, o2[index]));
  }

  if (Array.isArray(o1) && !Array.isArray(o2)) {
    return false;
  }

  if (!Array.isArray(o1) && Array.isArray(o2)) {
    return false;
  }

  if (o1 === null || o2 === null) {
    return false;
  }

  if (typeof o1 === 'object' && typeof o2 === 'object') {
    if (Array.isArray(o1) || Array.isArray(o2)) {
      return false;
    }

    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    return keys1.every((elem) => areDeeplyEqual(o1[elem], o2[elem]));
  }

  return false;
};
