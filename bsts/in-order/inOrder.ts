import { BNodeNum } from "../common/bst";

/** inOrder(): Traverse from the invoking node using in-order DFS.
 * Returns an array of visited nodes. */

function inOrder(node: BNodeNum | null): number[] {
  let out: number[] = [];
  if (node === null) return [];

  if (node.left) {
    out = out.concat(inOrder(node.left));
  }

  out.push(node.val);

  if (node.right) {
    out = out.concat(inOrder(node.right));
  }

  return out;
}



/** inOrderAccum(): Traverse the BST using in-order DFS.
 * Returns an array of visited nodes.
 * Uses an "accumulator"
 */

function inOrderAccum(
  node: BNodeNum | null = null,
  accum: number[] = []): number[] {

  if (node === null) return accum;

  if (node.left) {
    accum = inOrderAccum(node.left, accum);
  }

  accum.push(node.val);

  if (node.right) {
    accum = inOrderAccum(node.right, accum);
  }

  return accum;
}


export { inOrder, inOrderAccum };
