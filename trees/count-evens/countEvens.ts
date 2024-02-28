import { TreeNodeNum } from "../common/tree";

/** countEvens(): starting from the invoking node and moving through its
 * children, count how many nodes have even values. Returns that count as
 * an integer. */
function countEvens(node: TreeNodeNum): number {
  if (node === null) return 0;

  let count = node.val % 2 === 0 ? 1 : 0;

  for (const c of node.children){
    count += countEvens(c);
  }

  return count;
}

export { countEvens };
