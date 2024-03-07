export const sleep = async (millis: number): Promise<string> =>
  new Promise(resolve => setTimeout(() => resolve('Hello world'), millis));
