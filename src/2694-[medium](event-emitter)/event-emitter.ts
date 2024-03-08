// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type Callback = (...args: any[]) => any;
type Subscription = { unsubscribe: () => void }

export class EventEmitter {
  collection = new Map<string, Callback[]>();

  subscribe(eventName: string, callback: Callback): Subscription {
    const callbacks = this.collection.get(eventName);

    this.collection.set(eventName, callbacks ? [...callbacks, callback] : [callback]);

    return {
      unsubscribe: () => {
        const array = this.collection.get(eventName);

        if (array) {
          this.collection.set(eventName, array.filter((cb) => cb !== callback));
        }
      },
    };
  }

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  emit(eventName: string, args: any[] = []): any[] {
    const callbacks = this.collection.get(eventName) ?? [];

    return callbacks.map((callback) => callback(...args));
  }
}
