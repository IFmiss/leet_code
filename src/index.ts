import './style.less';
// import './exp'
import { reverseString, swapPairs } from './leetcode/study'
import LinkedList, { linkToArray } from './leetcode/linkedList'
import generate from './leetcode/_118'
import getRow from './leetcode/_119'
import fib from './leetcode/_509';
import { climbStairs } from './leetcode/_70';
import { add, fact, fact1 } from './leetcode/weidigui';

console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString(["H","a","n","n","a","h"]))
// console.log(reverseTb([1, 2, 3, 4]))


const link = new LinkedList<number | null>()
link.insert(1, link.head?.val || null)
link.insert(2, 1)
link.insert(3, 2)
link.insert(4, 3)


linkToArray(swapPairs(link.head?.next || null))

// console.info('climbStairs', climbStairs(40))
// console.info('fact1', fact1(6, 1));
// console.info('fact', fact(6));
console.info('add', add(6, 5));

// console.log(generate(5))
console.log('getRow(4)', getRow(3))
console.log(fib(30))