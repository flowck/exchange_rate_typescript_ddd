/**
 * proxy function that binds the class instance to itself
 * to prevent object from losing its context
 * @param {T} target
 */
export default function selfish<T extends object>(target: T): T {
  const cache = new WeakMap();
  const handler = {
    get(target: T, key: string) {
      const value = Reflect.get(target, key);
      if (typeof value !== 'function') {
        return value;
      }
      if (!cache.has(value)) {
        cache.set(value, value.bind(target));
      }
      return cache.get(value);
    }
  };
  const proxy = new Proxy(target, handler);
  return proxy;
}