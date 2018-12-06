////////////////////
// Insertion Sort //
////////////////////

// One of the elementary sorts, but one that is good in some scenarios over more popular sorts

// Builds up the sort by gradually creating a larger left half which is always sorted

// Example
// [5,3,4,1,2]
// Our sorted portion first includes 5,3. We sort this portion to [3,5]
// Now we move on to 4, and we have [3,5,4] and we once again sort this portion to [3,4,5]
// We continue until the entire array is sorted

// We gradually build up the sorted portion of an array, a whole poriton of the array will ALWAYS be sorted

// It is called insertion sort because we are inserting it into a specific spot

// Psuedocode

// Pick the second element in the array, we can skip the first
// Compare the second element to the oe before it and swap if necessary
// Continue to the next element and if it is in the incorrect order, iterated through the sorted potion and place it in the correct place
// Return array

// We first loop through the array, starting with index one
// We nest another loop which checks, for each number, if the number before it is larger than it, it is is than we swap its position with that number.
// using the statement j >= 0, makes us loop the entire length before the current number we're at
// the statement && arr[j] > currentVal makes sure we ONLY swap if a number before our current number if larger than our current number and also stops the loop if we bump into a number less than our current j iteration. Essentially what happens is our j loop is shifting all the elements that are larger than it one unit to the right, when it bumps into a value that it is larger than, we stop looping the j loop, and place the current value right before the number that the current value is larger than
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// Note, we are using var instead of let because var has global scope and is accessible outside of our nested loop
