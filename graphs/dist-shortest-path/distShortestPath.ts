import { g } from "vitest/dist/suite-UrZdHRff";
import { GNodeStr } from "../common/graph";
import { Queue } from "../common/queue";
import { Stack } from "../common/stack";

/** Distance of shortest path between start and end.
 * If no path exists, return Infinity. */

function distShortestPath(start: GNodeStr, sought: GNodeStr): number {
  let steps = 0;

  if (start === sought) return steps;

  const toVisit = new Queue([start]);
  const visited = new Set([start]);

  steps++;
  while (!toVisit.isEmpty()) {
    let current = toVisit.dequeue();
    const currentToVisit = new Stack([current.adjacent]);

    for (const child of current.adjacent) {
      currentToVisit.pop();

      if (!visited.has(child)) {
        toVisit.enqueue(child);
        visited.add(child);
      }

      if (currentToVisit.isEmpty()) {
        steps++;
      }

    }

  }

  return Infinity;
}

export { distShortestPath };