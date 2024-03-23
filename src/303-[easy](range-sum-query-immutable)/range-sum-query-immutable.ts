export class NumArray {
  prefixes: number[] = [];

  constructor(nums: number[]) {
    let sum = 0;

    this.prefixes = nums.map((n) => sum += n);
  }

  sumRange(left: number, right: number): number {
    return this.prefixes[right] - (this.prefixes[left - 1] ?? 0);
  }
}
