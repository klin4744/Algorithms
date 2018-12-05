////////////////////
// Selection Sort //
////////////////////

// Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

// Example
// [5,3,4,1,2]
// We iterate through the entire array storing the smallest number and saving it to a variable, we continue to iterate through the array until we reach the end. We then swap the smallest number with the positon of the current number we are on,
// 1 iteration through our array finds 1 as the smallest number, since this is our first iteration, we swap the positon of 1 and 5! [1,3,4,5,2]
// We do our swap at the end, not with each iteration!
// We also do not consider the sorted elements in future iterations, in our example case we have [3,4,5,2] to sort since 1 is sorted already.

// Example

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) smallest = j;
    }
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
  }
  return arr;
}

selectionSort([2, 3, 6, 7, 10, 20, 30, 99, 3]);
