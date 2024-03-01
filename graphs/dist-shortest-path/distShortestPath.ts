import { g } from "vitest/dist/suite-UrZdHRff";
import { GNodeStr, GNode } from "../common/graph";
import { Queue } from "../common/queue";
import { Stack } from "../common/stack";

/** Distance of shortest path between start and end.
 * If no path exists, return Infinity. */

function distShortestPath(start: GNodeStr, sought: GNodeStr): number {
  let steps = 0;

  if (start === sought) return steps;

  // TODO: node and distance in queue, wouldn't need steps
  const toVisit = new Queue([start]);
  const visited = new Set([start]);

  const nodesInStep: Set<GNode<string>> = new Set([start]);

  while (!toVisit.isEmpty()) {
    const current = toVisit.dequeue();
    nodesInStep.delete(current);

    if (current.value === sought.value) {
      return steps;
    }

    if (nodesInStep.size === 0) {
      steps++;
      nodesInStep.clear();

      for (const adjNode of current.adjacent) {
        if (!visited.has(adjNode)) {
          nodesInStep.add(adjNode);
        }
      }
    }

    for (const child of current.adjacent) {
      if (!visited.has(child)) {
        toVisit.enqueue(child);
        visited.add(child);
      }
    }
  }

  return Infinity;
}

export { distShortestPath };