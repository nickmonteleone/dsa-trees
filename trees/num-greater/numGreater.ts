import { TreeNodeNum } from "../common/tree";

/** numGreater(lowerBound): starting from the invoking node and moving
 * through its children, return a count of the number of nodes whose value
 * is greater than lowerBound. */

function numGreater(node: TreeNodeNum, lowerBound: number): number {
  if (node === null) return 0;

  let count = node.val > lowerBound ? 1 : 0;

  for (const c of node.children){
    count += numGreater(c, lowerBound);
  }

  return count;
}

export { numGreater };