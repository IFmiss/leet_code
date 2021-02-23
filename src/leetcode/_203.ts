// 删除链表中等于给定值 val 的所有节点。

// 示例:

// 输入: 1->2->6->3->4->5->6, val = 6
// 输出: 1->2->3->4->5

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let node = new ListNode();
  node.next = head;
  let prev = node;
  while(prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return node.next;
};
