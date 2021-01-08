// ["h","e","l","l","o"]
export default function reverseString(s: string[]): void {
  let len = s.length;
  const fn = (start: number, end: number, s: string[]) => {
    if (start > end) {
      return;
    }
    let tmp = s[start];
    s[start] = s[end];
    s[end] = tmp;
    fn(start + 1, end - 1, s);
  }

  fn(0, len - 1, s);
};