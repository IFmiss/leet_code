let cache = new Map();
function fib(N: number): number {
  if (N == 0) return 0
  if (N == 1) return 1
  if (cache.has(N)) {
    return cache.get(N)
  }
  let ret = fib(N - 1) + fib(N - 2)
  cache.set(N, ret);
  return ret;
}

export default fib
