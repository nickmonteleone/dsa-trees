import { BNodeNum } from "../common/bintree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of visited nodes. */

function preOrder(node: BNodeNum | null): number[] {
  if (node === null) return [];

  let current = [node.val];
  for (const child of [node.lnode, node.rnode]){
    current = current.concat(preOrder(child));
  }

  return current;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of visited nodes. */

function postOrder(node: BNodeNum | null): number[] {
  if (node === null) return [];

  let current:number[] = [];
  for (const child of [node.lnode, node.rnode]){
    current = current.concat(postOrder(child))
  }

  current.push(node.val)
  return current;
}

export { preOrder, postOrder };