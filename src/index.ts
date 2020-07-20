import './style.less';
// import './exp'
import { reverseString, swapPairs } from './leetcode/study'
import LinkedList, { linkToArray } from './leetcode/linkedList'
import generate from './leetcode/_118'

console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString(["H","a","n","n","a","h"]))
// console.log(reverseTb([1, 2, 3, 4]))


const link = new LinkedList<number | null>()
link.insert(1, link.head?.val || null)
link.insert(2, 1)
link.insert(3, 2)
link.insert(4, 3)


linkToArray(swapPairs(link.head?.next || null))

console.log(generate(5))
