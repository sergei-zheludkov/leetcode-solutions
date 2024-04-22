import { TreeNode } from '../models/tree-node';
import { createLinkedList } from '../helpers/create-linked-list';
import { isSubPath } from './linked-list-in-binary-tree';

const tree1 = new TreeNode(1, new TreeNode(4, null, new TreeNode(2, new TreeNode(1))), new TreeNode(4, new TreeNode(2, new TreeNode(6), new TreeNode(8, new TreeNode(1), new TreeNode(3)))));
const tree2 = new TreeNode(1, null, new TreeNode(1, new TreeNode(10, new TreeNode(9)), new TreeNode(1)));

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
