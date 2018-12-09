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

// Better solution
function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swpIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swpIdx++;
      [arr[swpIdx], arr[i]] = [arr[i], arr[swpIdx]];
    }
  }
  [arr[start], arr[swpIdx]] = [arr[swpIdx], arr[start]];
  return swpIdx;
}

// How does this work?
// [4,8,2,1,5,7,6,3]
// For our first iteration, 8 is not less than 4
// 2nd iteration 2 is less than 4, so swap index becomes 1, now we swap 1 with the item at the item at arr[swpIndex], since swpInd counts how many elements are less than our pivot, the things greater than 4 will always be pushed out to the right of the array

// Quicksort Pseudocode
// Call the pivot helper on the array
// Recursively call the quick sort again on both the left and the right of the pivot
// for example, for the array [4,6,9,1,2,5,3]
// We start by calling pivot on our array, this rearranges the initial array and gives us the index of the first element (4)
// Now we have [3,1,2,4,6,9,5]
// Now we recursively call quicksort on the left and the right halves of the array, the middle is the index returned by our first pivot
// lefthalf = quickSort(0,4 - 1)
// righthalf = quicksort(4 + 1,arr.length-1)
// so we have a series
// [3,2,1]  and [6,9,5]
// [1,2,3]  and [5,6,9]
// [1,2]  and [5] and [9] are called
// on completion we have the indexes for:
// [1,2,3,4,5,6,9]
// We set the base case to stop it from running it the array lengths are 0 or 1, (sub array length since we do not want to mutate the old array)
// We return the m
// Keep in mind the left side of the array will form first
// Also keep in mind that the array thats inserted will be mutated, do not make a new array

//Attempt
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
// How does this work? our first call to pivot sets our first index which gives us some kind of index. This index basically serves as our midpoint or pivot point. the first quickSort call sorts the items to the left of our pivot while the second one sorts the right. The arguments we pass in tell our quicksort call to basically condense our array into a subarray by passing in indexes. The quick sort will continue to sort with pivot until the argument passed in is left = right or basically until we are passing in a subarray of length >=1. In which case we return the array to be called by the right side in which the same process happens again. We do not have to return a new array because our pivot function mutates our original array. Everytime it is called, an item is being placed to the correct index in the mutated array. We returned the index from the pivot because we wanted to recieve a start and end point for our next recursive calls. By setting a default we can place arguments into our function while also making sure the first call runs how we want it to run everytime!

// Time and space complexities

// Time  (Best)   (Average)   (Worst)
//       n*log*n   n*log*n     n^2
// Since our pivot always uses the first item to pivot, if the array is almost sorted, everytime we go through the array, we are pivoting by one item. This makes us decomp n times and requires us to do n comparisons.
// If the pivot is either the minimum or the maximum item for each iteration, we have bad time complexity
// A way to fix this is to make the pivot select a random number or the median
