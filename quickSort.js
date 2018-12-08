////////////////
// Quick Sort //
////////////////

// Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
// Works by selecting one element(called the "pivot") and finding the index where the pivot should end up in the sorted array

// Example
// [5,2,1,8,4,7,6,3]
// Move all numbers less than five to the left of it and all numbers greater than five to thr right of it
// Doing this, we end up with [3,2,1,4,5,7,6,8]
// Although our list currently is not sorted, we know that five is indeed in the right index
// We repeat this process for each element
// We can pick ANY number, in this case we chose the first number so lets continue to do that
// [3,2,1,4,5,7,6,8]
// Repeat the process on both left and right side
// First look at left (3), 3 will have index of 2
// [1,2,3,4] 5 [7,6,8]
// [] Now we can pick just [1,2] because 3 is already in our index 2, so [1,2] arrange those
// next do the right side [7,6,8], when we test 7, we find that 7 must be the 6th element so [6,7,8]

// View this on Visualgo!

// Pseudocode

// Part 1 - Pivot/Partition Helper //
// Given an array, this helper function should designate an element as the pivot
// It should then rearrange elements in the arrays so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot.
// The order of elements on either side of the pivot doesn't matter!
// The helper should do this in place, that is, it should not create a new array
// When complete, the helper should return the index of the pivot

// Choosing a pivot
// The runtime of quick sort depends in part on how one selects the pivot
// Ideally, the pivot should be chosen so that it's rougly the median value in the data set you're sorting
// For simplicity, we'll always choose the pivot to be the first function

// Example
// pivot([5,2,1,8,4,7,6,3]) //4
// The first value, 5 should be in index 4!
// Any of these mutations are acceptable:
// [2,1,4,3,5,8,7,6]
// [1,4,3,2,5,7,6,8]
// [3,2,1,4,5,7,6,8]
// [4,1,2,3,5,6,8,7]

// Attempt
function pivot(arr) {
  let start = arr[0];
  let index = 0;
  let lastLargestIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < start) {
      if (arr[i - 1] > start) {
        [arr[lastLargestIndex], arr[i]] = [arr[i], arr[lastLargestIndex]];
      }
      index++;
    }
    if (arr[i] > start && arr[i - 1] < start) {
      lastLargestIndex = i;
    }
  }
  [arr[0], arr[index]] = [arr[index], arr[0]];
  return index;
}
