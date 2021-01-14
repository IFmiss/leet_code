// 实现 `pow(x, n)` ，即计算 x 的 n 次幂函数。
// **示例 1**:
// ```code
// 输入: 2.00000, 10
// 输出: 1024.00000
// ```
// **示例 2**:
// ```code
// 输入: 2.10000, 3
// 输出: 9.26100
// ```
// **示例 3**:
// ```code
// 输入: 2.00000, -2
// 输出: 0.25000
// 解释: 2-2 = 1/22 = 1/4 = 0.25
// ```
// **说明**:
// - -100.0 < x < 100.0
// - n 是 32 位有符号整数，其数值范围是 [−2 的 31次方, 2 的31次方 − 1] 。

export default function myPow(x: number, n: number): number {
  const fastPow = (x: number, n: number): number => {
    if (n === 0) {
      return 1;
    }

    const half = fastPow(x, Math.floor(n / 2));
    if (n % 2 === 1) {
      // 基数
      return half * half * x;
    } else {
      return half * half;
    }
  }

  const ret = fastPow(x, Math.abs(n));
  return n > 0 ? ret : 1 / ret;
};
