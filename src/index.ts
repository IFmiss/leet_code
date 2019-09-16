import './style.less';
// import './exp'
import LogUtils from 'd-utils/lib/logUtils';
import * as DeviceUtils from 'd-utils/lib/deviceUtils';
import LeetCode from './leetcode/index'

// LogUtils.logInfo('WEBPACK-TPL', 'HELLO')
DeviceUtils.checkLayoutOrientation()


LogUtils.logInfo(LeetCode._1([2, 7, 11, 15, 4, 5], 9), '_1')
LogUtils.logInfo(LeetCode._3('abcabcbb'), '_3')
LogUtils.logInfo(LeetCode._7(-321), '_7')
LogUtils.logInfo(LeetCode._9(121), '_9')
LogUtils.logInfo(LeetCode._1189('balloon'))
