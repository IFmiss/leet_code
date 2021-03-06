import LinkedList, { Node } from "./linkedList";

/**
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
 * 输入：["h","e","l","l","o"]
 * 输出：["o","l","l","e","h"]
 * 
 * 输入：["H","a","n","n","a","h"]
 * 输出：["h","a","n","n","a","H"]
 */
export const reverseString = function(s: string[]) {
  const len = s.length
  let pos = 0
  let rightPos = len - 1
  while (pos < Math.ceil(len / 2)) {
    let target = s[pos]
    s[pos] = s[rightPos]
    s[rightPos] = target

    pos++
    rightPos--
  }
  return s
};

/**
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
 */
// [1, 2, 3, 4]  => [2, 1, 3, 4]

// export const reverseTb = (arr: any[]) => {
//   let lk = new LinkedList()
//   const toLink = arr.reduce((item, current) => {
//     console.log('item, current', item, current)
//     lk.insert(current, item)
//     return item
//   }, lk.head.val)
//   console.log(toLink)
// }

export function swapPairs(head: Node<number | string | null> | null) {
  if (head == null || head.next == null) {
    return head
  }

  const seconed = head.next
  head.next = swapPairs(seconed.next)
  seconed.next = head
  return seconed
}



let memo: any = {};
function fib(n: number): number {
  if (n == 0) return 0
  if (n == 1) return 1
  console.log(n, memo)
  if (memo[n]) return memo[n]
  memo[n] = fib(n - 1) + fib(n - 2)
  return memo[n];
};

export function fibArr(n: number): number {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}
