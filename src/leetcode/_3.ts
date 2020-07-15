/**
 * @description 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
   请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
  * @param {*} s 字符串
  * @link https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
  */
export default function _3 (s: string) {
  const l = s.length
  if (l === 1) {
    return 1;
  }
  const arrS = s.split('');
  let maxLength = 0, selfJ = 0;
  for (let i = 0; i < l; i++) {
    for (let j = selfJ; j < i; j++) {
      maxLength = Math.max(maxLength, (i - j))
      if (arrS[i] === arrS[j]) {
        selfJ = j + 1
        break
      }
    }
  }
  return Math.max(maxLength, l - selfJ)
}
