import { BNodeNum } from "../common/bintree";

/** Minimum depth from node to an "incomplete node".
 *
 * An incomplete node is a node with 0 or 1 children (not 2).
 */

function minDepthToIncomplete(node: BNodeNum): number {
  if (node === null) return 0;
  if (node.lnode === null || node.rnode === null) return 1;

  let minCount = 1;

  for (const c of [node.lnode, node.rnode]) {
    const count = minDepthToIncomplete(c);

    minCount = Math.min(count, minCount);
  }

  return ++minCount;
}

export { minDepthToIncomplete };