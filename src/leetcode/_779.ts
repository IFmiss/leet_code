// 在第一行我们写上一个 0。接下来的每一行，将前一行中的0替换为01，1替换为10。

// 给定行数 N 和序数 K，返回第 N 行中第 K个字符。（K从1开始）


// 例子:

// 输入: N = 1, K = 1
// 输出: 0

// 输入: N = 2, K = 1
// 输出: 0

// 输入: N = 2, K = 2
// 输出: 1

// 输入: N = 4, K = 5
// 输出: 1

// 解释:
// 第一行: 0
// 第二行: 01
// 第三行: 0110
// 第四行: 01101001

export default function kthGrammar(N: number, K: number): number {
  if (N === 1 || K === 1) return 0;
  if (K === 2) return 1;
  // 如果 K 是奇数，则 N,K 对应的值为父级（N-1，((K + 1)) / 2）的位置的值
  if (K % 2) {
    return kthGrammar(N-1, (K + 1) / 2);
  } else {
    // 偶数 
    // 上一行为0 下一行为1
    // 上一行为1 下一行为0
    return kthGrammar(N-1, K / 2) === 0 ? 1 : 0;
  }
};
