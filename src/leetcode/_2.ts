// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。



// 链接：https://leetcode-cn.com/leetbook/read/linked-list/fv6w7/

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;
  // 创建新的 linkList
  let linkList = new ListNode(0);
  // link 用于next 移动赋值，更新 linkList
  let link = linkList;
  // 是否大于9 补1
  let isMoreThan9 = false;

  while(l1 || l2 || isMoreThan9) {
    // link.val = l1.val + l2.val + (isMoreThan9 ? 1 : 0);
    let val1 = ((l1 && l1.val) || 0);
    let val2 = ((l2 && l2.val) || 0);
    // 求值
    let sum: number = val1 + val2 + (isMoreThan9 ? 1 : 0);

    // 是否大于9
    isMoreThan9 = sum > 9;

    // 设置元素的值
    link.next = new ListNode(sum % 10);
    // 后移
    link = link.next;

    // 存在即后移
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }
  // 从第二个开始返回
  return linkList.next;
};
