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
