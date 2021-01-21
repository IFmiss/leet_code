import './style.less';
// import './exp'
import { fibArr, swapPairs } from './leetcode/study'
import LinkedList, { linkToArray } from './leetcode/linkedList'
import generate from './leetcode/_118'
import getRow from './leetcode/_119'
import fib from './leetcode/_509';
import { climbStairs } from './leetcode/_70';
import { add, fact, fact1, sum5, sum5Old } from './leetcode/weidigui';
import reverseString from './leetcode/_344';
import reverseList from './leetcode/_206';
import myPow from './leetcode/_50';
import kthGrammar from './leetcode/_779';
import generateTrees from './leetcode/_95';

// console.log(reverseString(["h","e","l","l","o"]))
// console.log(reverseString(["H","a","n","n","a","h"]))
// console.log(reverseTb([1, 2, 3, 4]))
console.log(kthGrammar(4, 4));
console.log(generateTrees(3));
const link = new LinkedList<number | null>()
link.insert(1, link.head?.val || null)
link.insert(2, 1)
link.insert(3, 2)
link.insert(4, 3)


console.info('list', reverseList({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}))


linkToArray(swapPairs(link.head?.next || null))

// console.info('climbStairs', climbStairs(40))
// console.info('fact1', fact1(6, 1));
// console.info('fact', fact(6));
// console.info('add', add(6, 5));

// console.info('add', sum5(100000, 0));
// console.info('add', sum5Old(100000));

let s = ['a', 'b', 'c', 'd'];
reverseString(s);
console.info('ssss', s);

// console.log(generate(5))
console.log('getRow(4)', getRow(3))
// console.log(fib(30))