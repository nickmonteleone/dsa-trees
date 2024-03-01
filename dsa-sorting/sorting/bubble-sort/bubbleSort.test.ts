import { it, expect } from "vitest";
import { bubbleSort } from "./bubbleSort";

it("should sort numbers in ascending order", function () {
  expect(bubbleSort([4, 20, 12, 10, 7, 9])).toEqual([4, 7, 9, 10, 12, 20]);
  expect(bubbleSort([])).toEqual([]);
});

it("mutates original array", function () {
  const nums = [4, 20, 12, 10, 7, 9];
  bubbleSort(nums);
  expect(nums).toEqual([4, 7, 9, 10, 12, 20]);
});
