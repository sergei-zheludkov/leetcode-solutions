export function last(this: unknown[]){
  if (!this.length) {
    return -1;
  }

  return this[this.length - 1];
}
