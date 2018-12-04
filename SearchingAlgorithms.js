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
