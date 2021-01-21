export default function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) return [];
  const getBSTnum = (start: number, n: number) => {
    if (start > n) return [null];
    if (start === n) return [new TreeNode(start)];

    const res = [];
    for (let i = start; i <= n; i++) {
      let leftBST = getBSTnum(start, i - 1);
      let rightBST = getBSTnum(i + 1, n);

      for (let leftV of leftBST) {
        for (let rightV of rightBST) {
          const root = new TreeNode(i);
          root.left = leftV;
          root.right = rightV;
          res.push(root);
        }
      }
    }
    return res;
  };
  return getBSTnum(1, n);
};