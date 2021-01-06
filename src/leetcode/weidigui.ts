export function fact(n: number): number {
  if (n <= 0) {
      return 1;
  } else {
      return n * fact(n - 1);
  }
}

// export function add(n: number): number {
//   if (n === 1) return n;
//   return n + add(n - 1);
// }

export function add(n: number, ret: number): number {
  if (n === 0) {
    return n + ret;
  };
  return add(n - 1, n + ret);
}
