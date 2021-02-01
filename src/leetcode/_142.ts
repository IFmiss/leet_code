function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return null;

  let fast = head.next.next;
  let slow = head.next;

  while (fast !== slow) {
    if (fast === null || fast.next === null) {
      return null;
    }
    fast = fast.next.next;
    slow = slow.next as ListNode;
  }

  return fast;
};