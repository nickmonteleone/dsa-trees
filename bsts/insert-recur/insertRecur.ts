import { BNode, BSTNum } from "../common/bst";

/** insertRecursively(val): Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecursively(bst: BSTNum, val: number): void {

  if (bst === null) return;
  if (bst.root === null) {
    bst.root = new BNode(val)
  }

  const current = bst.root;

  if (val < current.val) {
    if (current.left === null) {
      current.left = new BNode(val);
      return;
    }
    insertRecursively(new BSTNum(current.left), val);
  }
  else if (val > current.val) {
    if (current.right === null) {
      current.right = new BNode(val);
      return;
    }
    insertRecursively(new BSTNum(current.right), val);
  }
  else {
    return;
  }
}

export { insertRecursively };

