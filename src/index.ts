import './style.less';
// import './exp'
import { reverseString, reverseTo } from './leetcode/study'
import LinkList from './leetcode/linkedList'

console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString(["H","a","n","n","a","h"]))
// console.log(reverseTb([1, 2, 3, 4]))


const link = new LinkList<number>()
link.insert(1, link.head.val)
link.insert(2, 1)
link.insert(3, 2)
link.insert(4, 3)
link.display()

const res = reverseTo(link.head.next)
console.log(res)

