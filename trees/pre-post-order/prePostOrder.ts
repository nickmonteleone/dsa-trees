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

function postOrder(node: TreeNodeNum | null): number[] {
  if (node === null) return [];

  let current:number[] = [];
  for (let child of node.children){
    current = current.concat(postOrder(child))
  }

  current.push(node.val)
  return current;
}

export { preOrder, postOrder };