import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  if (node === null) return 0;

  let maxCount = 0;

  for (const c of node.children) {
    const count = maxDepth(c);

    maxCount = Math.max(count, maxCount);
  }

  return ++maxCount;
}

export { maxDepth };
