// link to problem: https://leetcode.com/problems/create-hello-world-function

const test1_args: string[] = [];
const test2_args = [{},null,42];
const test3_args = [2,3,[],""];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createHelloWorld = () => (...args: unknown[]): string => "Hello World";

const func = createHelloWorld();

console.log('test \n EXPECTED: Hello World \n OUTPUT:', func(...test1_args))
console.log('test \n EXPECTED: Hello World \n OUTPUT:', func(...test2_args))
console.log('test \n EXPECTED: Hello World \n OUTPUT:', func(...test3_args))

export { createHelloWorld };
