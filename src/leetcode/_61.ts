// 旋转链表

// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:
// 向右旋转 1 步: 5->1->2->3->4->NULL
// 向右旋转 2 步: 4->5->1->2->3->NULL

// 示例 2:

// 输入: 0->1->2->NULL, k = 4
// 输出: 2->0->1->NULL
// 解释:
// 向右旋转 1 步: 2->0->1->NULL
// 向右旋转 2 步: 1->2->0->NULL
// 向右旋转 3 步: 0->1->2->NULL
// 向右旋转 4 步: 2->0->1->NULL

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) return head;

  let length = 0;
  let caclL = head;
  while(caclL) {
    length ++;
    caclL = caclL.next as ListNode;
  }

  let pos = k % length;
  if (pos === 0) return head;
  let slow = head;
  let fast = head;
  while (pos > 0) {
    pos --;
    fast = fast.next as ListNode;
  }

  while (fast && fast.next) {
    slow = slow.next as ListNode;
    fast = fast.next;
  }

  let newHead = slow.next;
  slow.next = null;
  fast.next = head;
  return newHead;
};
