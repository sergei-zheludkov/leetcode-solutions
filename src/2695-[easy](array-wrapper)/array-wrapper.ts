export class ArrayWrapper {
  nums: number [] = [];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  valueOf(): number {
    let result = 0;

    for (const num of this.nums) {
      result += num;
    }

    return result;
  }

  toString(): string {
    let result = '[';

    if (!this.nums.length) {
      return `${result}]`;
    }


    for (const num of this.nums) {
      result = `${result}${num},`;
    }

    return `${result.substring(0, result.length - 1)}]`;
  }
}
