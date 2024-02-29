import { GNodeStr } from "../graph/graph";

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
  return ["todo"];
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: GNodeStr): string[] {
  return ["todo"];
}


export { iDfs, rDfs, bfs };