// 请判断一个链表是否为回文链表。

// 示例 1:

// 输入: 1->2
// 输出: false
// 示例 2:

// 输入: 1->2->2->1
// 输出: true
// 进阶：
// 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题

// function isPalindrome(head: ListNode | null): boolean {
//   if (!head) return false;
//   let stack = [];
//   let posHead = head;
//   while(posHead) {
//     stack.push(posHead.val);
//     posHead = posHead.next;
//   }

//   if (stack.length === 1) return true;

//   while(stack.length) {
//     if (stack.pop() === head.val) {
//       head = head.next;
//     }
//     return false;
//   }
//   return true;
// };

function isPalindrome(head: ListNode | null): boolean {
  if(head === null || head.next === null) return true;
  let slow: ListNode = head;
  let fast: ListNode = head;
  let pre = null;
  let reverse = null;
  // 快指针先动直到结束
  while(fast && fast.next) {
    pre = slow;
    slow = slow.next as ListNode;
    fast = fast.next.next as ListNode;
    pre.next = reverse;
    reverse = pre;
  }
  if (fast) {
    slow = slow.next as ListNode;
  }

  while(slow) {
    if (slow.val !== reverse?.val) {
      return false;
    }
    slow = slow.next as ListNode;
    reverse = reverse?.next;
  }
  return true;
}
