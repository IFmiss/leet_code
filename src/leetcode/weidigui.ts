"use strict";
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

export function sum5(n: number, total = 0): number {
  if (n === 0 ) return total
  if (n % 5 !== 0) return sum5(n - 1, total)
  return sum5(n - 5, n + total)
}

export function sum5Old (n: number) {
  console.log(n)
  if (n <= 0) return 0
  if (n % 5 === 0) return n + sum5(n - 5)
  return sum5(n - 1)
}
