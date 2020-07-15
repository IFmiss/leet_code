/**
 * @description 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 示例 1:
 * 输入: 123
 * 输出: 321
 * @param {*} x 
 */
export default function _7 (x: number) {
  let resut = 0
  do {
    if (resut > 214748364 || resut < -214748364) return 0
    resut = resut * 10 + x % 10
    x = ~~(x / 10)
  } while (x)
  return resut
}
