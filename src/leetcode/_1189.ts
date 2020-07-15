/**
 * @description 给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。
 * 字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"
 * 示例 1：
 * 输入：text = "nlaebolko"
 * 输出：1
 * 示例 2：
 * 输入：text = "loonbalxballpoon"
 * 输出：2
 * 示例 3:
 * 输入：text = "leetcode"
 * 输出: 0
 * 提示：
 * 1 <= text.length <= 10^4
 * text 全部由小写英文字母组成
 * @param {*} str 字符串 1 <= text.length <= 10^4
 * @link https://leetcode-cn.com/problems/palindrome-number/
 */
export default function _1189 (str: string) {
  const s = 'balloon'
  if (str.length < s.length) return 0
  if (str.length === s.length && str !== s) return 0
  function getCount (s: string) {
    const re = "/[" + s + "]/g"
    return str.match(eval(re)) ? str.match(eval(re)).length : 0
  }
  return Math.min(getCount('b'), getCount('a'), ~~(getCount('l') / 2), ~~(getCount('o') / 2), getCount('n'))
}
