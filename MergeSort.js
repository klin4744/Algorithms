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

// pointer1 points at arr1, it lets us know if we used an element in arr1. Similarly, pointer2 points at arr2 and lets us know if we used an element in arr2
// emptyArr is the combined arr we will return
// The while loop will run until every single element of arr1 and arr2 is placed within the emptyArr we initialized, so it will run as long as our emptyArr length isnt equal to the sum of the lengths of our two arrays
// If our arr1[pointer1] is less than arr2[pointer2] we want to push arr1[pointer1] to our empty array then increment pointer 1, this way we can tell our algorithm that one element of arr1 has been used up! The same is for the other pointer
// If either pointer reaches its array length, we will know that there are no items left to push from that array, so we instead push the remaining items in the other array.
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
// THIS WILL NOT WORK IF EITHER ARRAY ISNT SORTED!

//Another example with three loops
function merge2(arr1, arr2) {
  let emptyArr = [];
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    console.log(pointer1, pointer2);
    if (arr1[pointer1] < arr2[pointer2]) {
      emptyArr.push(arr1[pointer1]);
      pointer1++;
    } else {
      emptyArr.push(arr2[pointer2]);
      pointer2++;
    }
  }
  while (pointer1 < arr1.length) {
    emptyArr.push(arr1[pointer1]);
    pointer1++;
  }
  while (pointer2 < arr2.length) {
    emptyArr.push(arr2[pointer2]);
    pointer2++;
  }
  return emptyArr;
}

// mergeSort Pseudocode
// Break up the array into halves until you have arrays that are empty or have one element
// call mergesort on the array again
// base case, when arrs are length 0 or 1.
// one we have smaller sorted arrays, merge them with other sorted arrays until it is sorted!

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// How does this work?
// Example mergeSort([10,24,76,73])
// Code executes
// Mid point is calculated
// Left assign gets ran and calls the recursive function mergeSort
// For our first iteration, we passed [10,24] so we bypass the if statement and once again calculate the midpoint and mergesort once again
// This time we pass in [10] to mergeSort so our base case makes us return a value
// now our left recursion call that was waiting on stack revieves the [10] and continues down the line BACK to the mergeSort call with the inputs ([10,24]), right now runs and returns [24] and finally we merge left and right to return [10,24] which pop off the stack.
// Now for our second call which was waiting the whole time for left to return something, moves down to right. Right follows the same procedure as let and returns [73,76]
// Finally we once again merge these two sorted arrays and get [10,24,73,76]
