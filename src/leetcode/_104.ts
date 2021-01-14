function maxDepth(root: TreeNode | null): number {
  return root
    ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
    : 0
};
