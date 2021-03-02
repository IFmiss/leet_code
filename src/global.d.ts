declare class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}


declare class ChildListNode {
  val: number
  prev: ChildListNode | null
  next: ChildListNode | null
  child: ChildListNode | null
  constructor(val?: number, prev? : ChildListNode, next? : ChildListNode, child? : ChildListNode) {
    this.val = (val===undefined ? 0 : val);
    this.prev = (prev===undefined ? null : prev);
    this.next = (next===undefined ? null : next);
    this.child = (child===undefined ? null : child);
  }
}

declare class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}
