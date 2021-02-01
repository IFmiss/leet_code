// 141. 环形链表
function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return false
  };

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while(slow !== fast) {
    if (fast === null || fast.next === null) return false;

    slow = (slow as ListNode).next;
    fast = fast.next.next;
  }
  
  return true;
};