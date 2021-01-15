function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // 如果 l1 到头了，直接拼l2的值
  if (l1 === null) {
    return l2;
  }

  // 如果 l2 到头了，拼接l1的值
  if (l2 === null) {
    return l1;
  }

  if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  } else {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
};