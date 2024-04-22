import { ListNode } from '../models/list-node';
import { TreeNode } from '../models/tree-node';

const dfs = (list: ListNode | null, tree: TreeNode | null): boolean => {
  if (!list) {
    return true;
  }

  if (!tree) {
    return false;
  }

  if (tree.val !== list.val) {
    return false;
  }

  return dfs(list.next, tree.left) || dfs(list.next, tree.right);
};

export const isSubPath = (list: ListNode | null, tree: TreeNode | null): boolean => {
  if (!tree) {
    return false;
  }

  if (dfs(list, tree)) {
    return true;
  }

  return isSubPath(list, tree.left) || isSubPath(list, tree.right);
};
