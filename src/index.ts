import './style.less';
// import './exp'
import LogUtils from 'd-utils/lib/logUtils';
import * as DeviceUtils from 'd-utils/lib/deviceUtils';
import LeetCode from './leetcode/index'
import { reverseString, reverseTb } from './leetcode/study'
import LinkList from './leetcode/linkedList'

console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString(["H","a","n","n","a","h"]))
// console.log(reverseTb([1, 2, 3, 4]))
// const link = new LinkList()
// link.insert(1, link.head.val)
// link.insert(2, 1)
// link.insert(3, 2)
// link.insert(4, 3)
// link.display()

reverseTb([1, 2, 3, 4])

// LogUtils.logInfo('WEBPACK-TPL', 'HELLO')
DeviceUtils.checkLayoutOrientation()


// LogUtils.logInfo(LeetCode._1([2, 7, 11, 15, 4, 5], 9), '_1')
// LogUtils.logInfo(LeetCode._3('abcabcbb'), '_3')
// LogUtils.logInfo(LeetCode._7(-321), '_7')
// LogUtils.logInfo(LeetCode._9(121), '_9')
// LogUtils.logInfo(LeetCode._1189('balloon'))
