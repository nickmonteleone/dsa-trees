import { BNodeNum } from "../common/bst";
import { Queue } from "../common/queue";
import { Stack } from "../common/stack";}


/** bfs(): Traverse the BST using BFS.
 * Returns an array of visited nodes. */

function bfs(node: BNodeNum | null): number[] {
  let out: number[] = [];
  if (node === null) return out;

  const toVisit = new Queue([node]);

  while (!toVisit.isEmpty()) {
    let current = toVisit.dequeue();
    out.push(current.val);

    if (current.left){
      toVisit.enqueue(current.left);
    }
    if (current.right){
      toVisit.enqueue(current.right);
    }
  }

  return out;
}

/** Dev demo for depth first to compare with bfs */

function dfs(node: BNodeNum | null): number[] {
  let out: number[] = [];
  if (node === null) return out;

  const toVisit = new Stack([node]);

  while (!toVisit.isEmpty()) {
    let current = toVisit.pop();
    out.push(current.val);

    if (current.left){
      toVisit.push(current.left);
    }
    if (current.right){
      toVisit.push(current.right);
    }
  }

  return out;
}

export { bfs, dfs };