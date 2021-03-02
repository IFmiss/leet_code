// 多级双向链表中，除了指向下一个节点和前一个节点指针之外，它还有一个子链表指针，可能指向单独的双向链表。这些子列表也可能会有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。

// 给你位于列表第一级的头节点，请你扁平化列表，使所有结点出现在单级双链表中。

// 链接：https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list

function flatten(head: ChildListNode | null): ChildListNode | null {
  let current = head;
  while(current) {
    if (current.child) {
      let child = current.child;
      let next = current.next;

      current.next = child;
      child.prev = current;
      current.child = null;

      while (current.next) {
        current = current?.next;
      }

      current.next = next;

      if (next) {
        next.prev = current;
      }
    }
    // 顶层后移
    current = current.next;
  }
  return head;
};