type Item = {
  value: number;
  timeoutID: NodeJS.Timeout;
};

export class TimeLimitedCache {
  collection = new Map<number, Item>();

  set(key: number, value: number, duration: number): boolean {
    const item = this.collection.get(key);

    if (item) {
      clearTimeout(item.timeoutID);
    }

    const timeoutID = setTimeout(() => this.collection.delete(key), duration);

    this.collection.set(key, { timeoutID, value });

    return !!item;
  }

  get(key: number): number {
    const item = this.collection.get(key);

    return item ? item.value : -1;
  }

  count(): number {
    return this.collection.size;
  }
}
