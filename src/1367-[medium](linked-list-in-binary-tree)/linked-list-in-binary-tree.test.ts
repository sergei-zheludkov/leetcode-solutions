import { BinaryTreeNode } from '../models/binary-tree-node';
import { createLinkedList } from '../helpers/create-linked-list';
import { isSubPath } from './linked-list-in-binary-tree';

const tree1 = new BinaryTreeNode(1, new BinaryTreeNode(4, null, new BinaryTreeNode(2, new BinaryTreeNode(1))), new BinaryTreeNode(4, new BinaryTreeNode(2, new BinaryTreeNode(6), new BinaryTreeNode(8, new BinaryTreeNode(1), new BinaryTreeNode(3)))));
const tree2 = new BinaryTreeNode(1, null, new BinaryTreeNode(1, new BinaryTreeNode(10, new BinaryTreeNode(9)), new BinaryTreeNode(1)));

describe('linked list in binary tree', () => {
  test.each([
    { tree: tree1, nodes: [4,2,8] },
    { tree: tree1, nodes: [1,4,2,6] },
    { tree: tree1, nodes: [4,2,8] },
    { tree: tree2, nodes: [1,10] },
  ])('truthy cases', ({ tree, nodes }) => {
    const list = createLinkedList(nodes);
    
    expect(isSubPath(list, tree)).toBeTruthy();
  });

  test.each([
    { tree: tree1, nodes: [4,2,9] },
    { tree: tree1, nodes: [1,4,2,6,8] },
  ])('falsy cases', ({ tree, nodes }) => {
    const list = createLinkedList(nodes);
    
    expect(isSubPath(list, tree)).toBeFalsy();
  });
});
