import { BNodeNum } from "../common/bintree";

/** Get minimum depth from node.
 *
 * Minimum depth: length of shortest path from node to a leaf.
 **/

function minDepth(node: BNodeNum): number {
  if (node === null) return 0;
  if (node.lnode === null && node.rnode === null) return 1;

  let leftCount: number | undefined;
  let rightCount: number | undefined;

  if (node.lnode){
    leftCount = minDepth(node.lnode);
  }

  if (node.rnode){
    rightCount = minDepth(node.rnode);
  }

  if (leftCount && rightCount){
    let minCount = Math.min(leftCount,rightCount);
    return ++minCount;
  }else{
    return 1 + (leftCount || rightCount)!;
  }
}

export { minDepth };