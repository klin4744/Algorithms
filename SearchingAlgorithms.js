// Objectives
//  Describe what a searching algorithm is
//  Implement a linear search on arrays
//  Implement binary search on sorted arrays
//  Implement a naive string search algorithm
//  Implement the KMP string searching algorithm

// We are now doing named algorithms

///////////////////
// Linear Search //
///////////////////

// Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want

// Linear search is good for unsorted lists, but is not the best method for sorted lists
// Some JavaScript methods that use linear search are:
// indexOf, includes, find, findIndex

// Linear search always goes through an entire array, checking each item for a search term. It can either start at the end or the front of the array.

// Basic linear search example:

// linearSearch simply looks through our entire numbers array and checks if any of the values are equivalent to the value we passed.
function linearSearch(numbers, value) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === value) return i;
  }
  return -1;
}
// linearSearch is time complexity O(n) generally but can be O(1) if the item we're looking for is the first item in the array. Generally we call linearSearch a time complexity O(n).

///////////////////
// Binary Search //
///////////////////

// Binary search is much faster than linearSearch
// Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
// A small caveat: the list MUST be sorted

// In binary search we pick the midpoint element in the sorted list and check if the value we are looking for is greater than or less than the middle. If it is greater than, we use the second half of the sorted list, otherwise we use the first half. We continue to do this until we get our desired value.

// Explanation
// [1,3,4,6,8,9,11,12,15,16,17,18,19], search for 15
// Lets consider 12 our midpoint (in the case of odd numbers, either round down or round up)
// since 15 is greater than 12, we disregard the elements to the left of 12, this gives us:
// [12,15,16,17,18,19]
// Lets once again consider the midpoint, use 16 because odd number of elements and we chose to round down the first time around
// 15 is smaller than 16, so we disregard anything past 16, leaving us with:
// [12,15,16]
// One last time gives us the number we're interested in: 15.
// Compared to regular linear search, which takes 9 iterations, binary search only takes us 3 iterations. Three times faster in this case, but can be much faster for larger lists!

// Example of binary search
function binarySearch(arr, value) {
  let middle = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[right] < value || arr[left] > value) return -1;
    middle = Math.ceil((left + right) / 2);
    if (arr[middle] === value) return middle;
    if (arr[middle] > value) {
      right = middle;
    } else if (arr[middle] < value) {
      left = middle;
    }
  }
  return -1;
}
