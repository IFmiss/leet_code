// 先找到第一次相遇的位置，再用一个从头开始，与fast 或者 slow 一起 后移一位
// 直到移动的位置，两个linkList 相等，说明这就是第一次进入环的元素
function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return null;

  let fast = head;
  let slow = head;

  // 如果有next
  while (fast && fast.next) {
    // fast -> 2
    fast = fast.next.next as ListNode;
    // slow -> 1
    slow = slow.next as ListNode;

    // 如果相等。slow 从新开始，与fast 同时每次移动一步
    if (fast === slow) {
      slow = head;
      while(slow !== fast) {
        slow = slow.next as ListNode;
        fast = fast.next as ListNode;
      }
      // 直到 slow 与 fast 相等
      return slow;
    }
  }
  return null;
};

// function detectCycle(head: ListNode | null): ListNode | null {
//   while (head && head.next && !head.asd) {
//     head.asd = 1
//     head = head.next
//   }
//   if (head && head.asd) {
//     return head
//   }
//   return null
// }
