// link to problem: https://leetcode.com/problems/to-be-or-not-to-be

type ToBeOrNotToBe = {
  toBe: (val: unknown) => boolean;
  notToBe: (val: unknown) => boolean;
};

export const expect = (value: unknown): ToBeOrNotToBe => ({
  toBe: (val) => {
    if (value === val) {
      return true;
    }
    throw "Not Equal";
  },
  notToBe: (val) => {
    if (value !== val) {
      return true;
    }
    throw "Equal";
  },
});

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
