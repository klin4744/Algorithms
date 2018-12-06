/////////////////
// Merge Sort //
////////////////

// Intermediate Sorting Algorithm //

// Faster sorts can improve time complexity from O(n^2) to O(n log n)

// Trade off between efficiency and simplicity

// Introduction //
// Merge sort is a combination of two things, merging and sorting
// Exploits the fact that arrays of 0 or 1 element are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then builds up a newly sorted arrays. Divide and conquer!

// Example
// [8,3,5,4,7,6,1,2]
// We start by splitting this array in half
// [8,3,5,4] and [7,6,1,2]
// We do not currently have one or zero items in each array so we split again
// [8,3] [5,4] [7,6] [1,2]
// and again..
// [8] [3] [5] [4] [7] [6] [1] [2]
// Now we merge them together, but as we merge them, we easily sort them, smaller one goes first!
// [3,8] [4,5] [6,7] [1,2]
// Repeat the process again with a few more comparisons, first compare the smallest elements, 3 and 4, 3 is smaller so it must come first, compare 4 and 8, 8 is larger so 4 must be second since 5 has to be bigger than 4! Finally place the 8 in place
// [3,4,5,8] [1,2,6,7]
// Now we do our last merge and all the comparisons again
// [1,2,3,4,5,6,7,8]

// Merging Arrays //

// Assume that the arrays are assorted, will be in the ovverall algorithm //

// Pseudocode
// In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
// Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
// This function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it.

// Create an empty array, take a look at the smallest values in each array
// while there are still values we havent looked at
// If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
// If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
// Once we exhaust one array, push in all the remaining values from the other array
function merge(arr1, arr2) {
  let emptyArr = [];
  let pointer1 = 0;
  let pointer2 = 0;
  while (emptyArr.length < arr1.length + arr2.length) {
    if (pointer1 === arr1.length) {
      emptyArr.push(arr2[pointer2]);
      pointer2++;
    } else if (pointer2 === arr2.length) {
      emptyArr.push(arr1[pointer1]);
      pointer1++;
    }
    if (arr1[pointer1] < arr2[pointer2]) {
      emptyArr.push(arr1[pointer1]);
      pointer1++;
    } else if (arr1[pointer1] > arr2[pointer2]) {
      emptyArr.push(arr2[pointer2]);
      pointer2++;
    }
  }
  return emptyArr;
}
