// 设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。

// 在链表类中实现这些功能：

// - get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
// - addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
// - addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
// - addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
// - deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。

// **示例：**

// ```code
// MyLinkedList linkedList = new MyLinkedList();
// linkedList.addAtHead(1);
// linkedList.addAtTail(3);
// linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
// linkedList.get(1);            //返回2
// linkedList.deleteAtIndex(1);  //现在链表是1-> 3
// linkedList.get(1);            //返回3
// ```

// **提示：**
// - 所有val值都在 [1, 1000] 之内。
// - 操作次数将在  [1, 1000] 之内。
// - 请不要使用内置的 LinkedList 库。

class ListNode {
  val;
  next: ListNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

export default class MyLinkedList {
  head: ListNode | null = null;
  tail: ListNode | null = null;
  length: number = 0;
  constructor() {}

  get(index: number): number {
    return this.getList(index)?.val || -1;
  }

  getList(index: number): ListNode | null {
    if (index > length || index < 0) return null;
    let pos = 0;
    let curList = this.head;
    while (index > pos) {
      curList = curList?.next || null;
      pos++;
    }
    return curList;
  }

  addAtHead(val: number): void {
    const lastHead = this.head;
    // 创建一个list node 节点
    const node = new ListNode(val);
    node.next = lastHead;
    this.head = node;
    // 如果没有tail 相当于首次初始化添加head
    // tail 也就是 head 只是tail 的next 是null
    if (!this.tail) {
      this.tail = node;
      this.tail.next = null;
    }
  }

  addAtTail(val: number): void {
  }

  addAtIndex(index: number, val: number): void {
    if (index === this.length) {
      this.addAtTail(val);
    }
    if (index === 0) {
      this.addAtHead(val);
    }
    if (index > 0 && index < this.length) {
      // 新增
      const indexList = this.getList(index) as ListNode;
      const addList = new ListNode(val);
      addList.next = indexList.next;
      indexList.next = addList;
      this.length ++;
    }
  }

  deleteAtIndex(index: number): void {

  }
}

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/