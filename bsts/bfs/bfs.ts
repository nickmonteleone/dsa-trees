import { BNodeNum } from "../common/bst";
import { Queue } from "../common/queue";
import { Stack } from "../common/stack";


/** bfs(): Traverse the BST using BFS.
 * Returns an array of visited nodes. */

function bfs(node: BNodeNum | null): number[] {
  const out: number[] = [];
  const toVisit = new Queue<BNodeNum|null>([node]);

  while (!toVisit.isEmpty()) {
    let current = toVisit.dequeue();
    if (current !== null) {
      out.push(current.val);
      toVisit.enqueue(current.left);
      toVisit.enqueue(current.right);
    }
  }

  return out;
}

/** Dev demo for depth first to compare with bfs */

function dfs(node: BNodeNum | null): number[] {
  const out: number[] = [];
  const toVisit = new Stack<BNodeNum|null>([node]);

  while (!toVisit.isEmpty()) {
    let current = toVisit.pop();
    if (current !== null) {
      out.push(current.val);
      toVisit.push(current.left);
      toVisit.push(current.right);
    }
  }

  return out;
}

export { bfs, dfs };