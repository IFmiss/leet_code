import { fnTime } from 'd-utils/lib/decoratorUtils'

export default class LeetCode {
  /**
   * @description 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
   * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
   * 示例:
   * 给定 nums = [2, 7, 11, 15], target = 9
   * 因为 nums[0] + nums[1] = 2 + 7 = 9
   * 所以返回 [0, 1]
   * @param {*} nums 数组
   * @param {*} target 目标相加的值
   * @link https://leetcode-cn.com/problems/two-sum/
   */

  @fnTime
  static _1 (nums, target) {
    const l = nums.length
    const m = new Map()
    for (let i = 0; i < l; i ++) {
      const r = target - nums[i]
      if (m.has(r)) {
        return [m.get(r), i]
      } else {
        m.set(nums[i], i)
      }
    }
    return []
  }

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
  @fnTime
  static _3 (s) {
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

  /**
   * @description 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
   * 示例 1:
   * 输入: 123
   * 输出: 321
   * @param {*} x 
   */
  @fnTime
  static _7 (x) {
    let resut = 0
    do {
      if (resut > 214748364 || resut < -214748364) return 0
      resut = resut * 10 + x % 10
      x = ~~(x / 10)
    } while (x)
    return resut
  }

  /**
   * @description 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
   * 示例 1:
   * 输入: 121
   * 输出: true
   * 示例 2:
   * 输入: -121
   * 输出: false
   * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
   * 示例 3:
   * 输入: 10
   * 输出: false
   * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
   * @param {*} x 整数
   * @link https://leetcode-cn.com/problems/palindrome-number/
   */
  @fnTime
  static _9 (x) {
    if (x < 0) return false
    let resut = 0;
    let t = x;
    do {
      resut = resut * 10 + x % 10;
      x = Math.floor(x / 10)
    } while (x)
    return resut === t
  }

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
  @fnTime
  static _1189 (str) {
    const s = 'balloon'
    if (str.length < s.length) return 0
    if (str.length === s.length && str !== s) return 0
    function getCount (s) {
      const re = "/[" + s + "]/g"
      return str.match(eval(re)) ? str.match(eval(re)).length : 0
    }
    return Math.min(getCount('b'), getCount('a'), ~~(getCount('l') / 2), ~~(getCount('o') / 2), getCount('n'))
  }

  /**
   * 面试题 10.01. 合并排序的数组
   */
  // let A = [1,2,3,0,0,0],
  //     m = 3,
  //     B = [2,5,6],
  //     n = 3
  // let mergeSortArray = (A, m, B, n) => {
  //   if (m === 0) return B
  //   if (n === 0) return A
  //   let i = 0;
  //   let j = 0;
  //   let r = []
  //   while (i < m && j < n) {
  //     if (A[i] > B[j]) {
  //       r.push(B[j])
  //       j ++
  //     } else {
  //       r.push(A[i])
  //       i ++
  //     }
  //   }

  //   while (j < m) {
  //     r.push(B[j])
  //     j++
  //   }

  //   while (i < n) {
  //     r.push(A[i])
  //     i++
  //   }
  //   console.log(r)
  // }
  // mergeSortArray([1,2,3,0,0,0], 3, [2,5,6], 3)
}