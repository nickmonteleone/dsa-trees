import { BNodeNum } from "../common/bst";
import { QueueNum } from "../common/queue";
import { Queue } from "../common/queue";


/** bfs(): Traverse the BST using BFS.
 * Returns an array of visited nodes. */

function bfs(node: BNodeNum | null): number[] {
  let out: number[] = [];
  if (node === null) return out;

  const queue = new Queue([node]);

  while (!queue.isEmpty()) {
    let current = queue.dequeue();
    out.push(current.val);

    if (current.left){
      queue.enqueue(current.left);
    }
    if (current.right){
      queue.enqueue(current.right);
    }
  }

  return out;
}

export { bfs };