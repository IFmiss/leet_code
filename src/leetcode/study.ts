import LinkedList, { INode } from "./linkedList";

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

export function reverseTo(head: INode<number>) {
  if (head == null || head.next == null) {
    return head
  }

  // console.log(head)

  const seconed = head.next
  console.log('next.next', seconed.next)
  head.next = reverseTo(seconed.next)
  console.log('----------', seconed.next)
  seconed.next = head
  return seconed
}

