export default function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  const next = head.next;
  const reverseHead = reverseList(head.next);
  next.next = head;
  head.next = null;
  return reverseHead;
};