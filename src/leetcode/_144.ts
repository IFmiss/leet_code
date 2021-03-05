// 二叉树前序
// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

// 输入：root = [1,null,2,3]
// 输出：[1,2,3]

function preorderTraversal(root: TreeNode | null): number[] {
  let data: number[] = [];
  if (!root) {
    return data;
  }

  const qianxu = (root: TreeNode | null): void => {
    if (!root) {
      return;
    }
    data.push(root.val);
    qianxu(root.left);
    qianxu(root.right);
  }

  qianxu(root);
  return data;
};
