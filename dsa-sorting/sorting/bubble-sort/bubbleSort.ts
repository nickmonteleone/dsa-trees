/** Sort in place and returns sorted array. */

function bubbleSort<T>(nums: T[]): T[] {
  for (let i = nums.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }

  return nums;
}

export { bubbleSort };