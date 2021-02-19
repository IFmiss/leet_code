// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 进阶：你能尝试使用一趟扫描实现吗？

// https://leetcode-cn.com/leetbook/read/linked-list/jf1cc/

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast = head,
      slow = head;

  while(--n && fast) {
    fast = fast?.next ?? null;
  }

  // 不存在直接返回null
  if(!fast?.next) return head?.next || null;

  // 否则存在的话
  fast = fast.next;

  // 顺位 第n之后 开始向后移动，
  while((fast && fast.next)) {
    fast = fast?.next || null;
    slow = slow?.next || null;
  }
  (slow as ListNode).next = slow?.next?.next as ListNode;
  return head;
};
