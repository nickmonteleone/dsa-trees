import { g } from "vitest/dist/suite-UrZdHRff";
import { GNodeStr, GNode } from "../common/graph";
import { Queue } from "../common/queue";
import { Stack } from "../common/stack";

/** Distance of shortest path between start and end.
 * If no path exists, return Infinity. */

function distShortestPath(start: GNodeStr, sought: GNodeStr): number {
  debugger;
  // if (start === sought) return steps;

  // TODO: node and distance in queue, wouldn't need steps
  const toVisit = new Queue([{current:start,steps: 0}]);
  const visited = new Set([start]);

  const nodesInStep: Set<GNode<string>> = new Set([start]);

  while (!toVisit.isEmpty()) {
    let {current, steps} = toVisit.dequeue();
    console.log("nodesInStep (before delete):",nodesInStep);
    nodesInStep.delete(current);

    console.log("current:%o steps%o:",current.value,steps)
    if (current.value === sought.value) {
      return steps;
    }

    if (nodesInStep.size === 0) {
      steps++;
      nodesInStep.clear();

      console.log("nodesInStep (after steps++):",nodesInStep);
      for (const adjNode of current.adjacent) {
        if (!visited.has(adjNode)) {
          nodesInStep.add(adjNode);
        }
      }
    }

    for (const child of current.adjacent) {
      if (!visited.has(child)) {
        toVisit.enqueue({current:child,steps});
        visited.add(child);
      }
    }
  }

  return Infinity;
}

export { distShortestPath };