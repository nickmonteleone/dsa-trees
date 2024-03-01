/** Sort array of strings in-place, case-insensitively. Returns array. */

function caseInsensitiveSort(arr: string[]): string[] {
  arr.sort((a,b) => {
    if (b.toUpperCase()  > a.toUpperCase()) return -1;
    if (b.toUpperCase()  < a.toUpperCase()) return 1;
    return 0;
  })
  return arr;
}

export { caseInsensitiveSort };