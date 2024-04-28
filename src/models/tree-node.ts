export class TreeNode {
  val: number;
  children: TreeNode[];
  constructor(val?: number, ...children: Array<TreeNode>) {
    this.val = (val === undefined ? 0 : val);
    this.children = children;
  }
}