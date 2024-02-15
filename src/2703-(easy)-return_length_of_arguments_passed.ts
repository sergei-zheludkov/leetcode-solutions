// link to problem: https://leetcode.com/problems/return-length-of-arguments-passed

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

const test1_args = [5];
const test2_args = [{}, null, "3"];
const test3_args = [{}, null, "3", null, 5];

function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}

console.log(`test1: \n EXPECTED: 1 \n OUTPUT:`, argumentsLength(...test1_args));
console.log(`test2: \n EXPECTED: 3 \n OUTPUT:`, argumentsLength(...test2_args));
console.log(`test3: \n EXPECTED: 5 \n OUTPUT:`, argumentsLength(...test3_args));

export { argumentsLength };
