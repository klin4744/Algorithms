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

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  return arr;
}
