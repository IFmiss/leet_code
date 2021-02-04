// 编写一个程序，找到两个单链表相交的起始节点。

// https://leetcode-cn.com/leetbook/read/linked-list/jjbj2/

// 暴力法
var getIntersectionNode = function(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (!headA || !headB) return null;
  let currA = headA;
  while(currA) {
    // 遍历 b
    let currB = headB;
    while(currB) {
      if (currA === currB) {
        return currA;
      }
      currB = currB.next as ListNode;
    }
    currA = currA.next as ListNode;
  }
  return null
};

// 哈希表
var getIntersectionNode = function(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (!headA || !headB) return null;
  let currA: ListNode | null = headA;
  let hash = new Map();
  while(currA) {
    hash.set(currA, true);
    currA = currA.next;
  }

  let currB: ListNode | null  = headB;
  while(currB) {
    if (hash.get(currB)) {
      return currB;
    }
    currB = currB.next;
  }
  return null;
}

// 双指针
var getIntersectionNode = function(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (!headA || !headB) return null;
  let currA: ListNode | null = headA;
  let currB: ListNode | null = headB;
  while(currA !== currB) {
    currA = currA === null ? headB : currA.next;
    currB = currB === null ? headA : currB.next;
  }
  return currA;
}

