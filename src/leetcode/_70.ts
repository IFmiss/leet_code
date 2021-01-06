// 会超时
export function climbStairs(n: number): number {
  // if (n === 1 || n === 2) return n;
  // return climbStairs(n - 1) + climbStairs(n - 2);

  const f = (n: number, ret: number, ret2: number): number => {
    if (n == 0) {
      return ret;
    }
    return f(n - 1, ret2, ret + ret2);
  }

  return f(n, 1, 1);
};

// export function climbStairs(n: number): number {
//   let climbArray = [];
//   climbArray[1] = 1;
//   climbArray[2] = 2;
//   for (let k = 3; k <= n; k++) {
//     climbArray[k] = climbArray[k - 1] + climbArray[k - 2];
//   }
//   return climbArray[n];
// }
