export class Iterator {
  data: number[] = [];
  index = 0;

  constructor(nums: number[]) {
    this.data = nums;
  }

  hasNext(): boolean {
    return !!this.data[this.index];
  }

  next(): number {
    this.index += 1;

    return this.data[this.index - 1];
  }
}