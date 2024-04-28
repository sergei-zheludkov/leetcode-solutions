export class BinaryTreeNode {
  val: number;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;
  constructor(val?: number | null, left?: BinaryTreeNode | null, right?: BinaryTreeNode | null) {
    this.val = (!val ? 0 : val);
    this.left = (!left ? null : left);
    this.right = (!right ? null : right);
  }
}