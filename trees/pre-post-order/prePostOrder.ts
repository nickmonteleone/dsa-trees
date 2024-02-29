import { TreeNodeNum } from "../common/tree"

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  if (node === null) return [];

  let current = [node.val];
  for (let child of node.children){
    current = current.concat(preOrder(child));
  }

  return current;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of visited nodes. */

function postOrder(node: BNodeNum | null): number[] {
  if (node === null) return [];

  let current = [];
  for (let child of node.children){
    current = child.concat(preOrder(child));
  }

  return current.concat([node.val]);
}

export { preOrder, postOrder };