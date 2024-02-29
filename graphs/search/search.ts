import { GNodeStr } from "../graph/graph";
import { Stack } from "../common/stack";
import { Queue } from "../common/queue";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
  start: GNodeStr,
  result: string[] = [],
  visited = new Set([start])): string[] {

  visited.add(start);
  result.push(start.value);

  for (const node of start.adjacent) {
    if (!visited.has(node)) {
      result = rDfs(node, result, visited);
    }
  }
  return result;
}

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: GNodeStr): string[] {
  const result: string[] = [];
  const toVisit = new Stack([start]);
  const visited = new Set([start]);

  while (!toVisit.isEmpty()) {
    let current = toVisit.pop();

    result.push(current.value);

    for (let child of current.adjacent) {
      if (!visited.has(child)) {
        toVisit.push(child);
        visited.add(child);
      }
    }
  }

  return result;
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: GNodeStr): string[] {
  const toVisit = new Queue([start])
  const visited = new Set([start]);
  const result: string[] = [];

  while(!toVisit.isEmpty()){
    let current = toVisit.dequeue();

    result.push(current.value);

    for (let child of current.adjacent){
      if (!visited.has(child)){
        toVisit.enqueue(child);
        visited.add(child);
      }
    }
  }

  return result;
}


export { iDfs, rDfs, bfs };