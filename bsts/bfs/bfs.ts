import { BNodeNum } from "../common/bst";
import { QueueNum } from "../common/queue";


/** bfs(): Traverse the BST using BFS.
 * Returns an array of visited nodes. */

function bfs(node: BNodeNum | null): number[] {

  // if (node === null) return null;

  const queue = new QueueNum([node.val])

  while (node !== null) {
    // queue.enqueue(node.left.val);


  }


  return [42];
}

export { bfs };