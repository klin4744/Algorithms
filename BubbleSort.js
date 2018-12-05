/////////////////
// Bubble Sort //
/////////////////

// Generally, Bubble Sort is rarely implemented (not really more efficient than other sorting methods)

// Bubble sort is a sorting algorithm where the largest values bubble up to the top
// As we loop through each item, we compare it to the item next to it. If it is larger than the item next to it, we swap it with the item next to it. For example [20,10] will get swapped because 20 > 10 to [10,20].

// The largest value by the end of the first iteration has "bubbled" to the end of the array, but the array may not be fully sorted.
// We repeat this process again but now we do not sort the last item since it must be the largest item
// As we continue iterations, we check less items until the whole array length is covered

// Example
// [5,3,4,1,2] => [3,5,4,1,2] => [3,4,5,1,2] => [3,4,1,5,2] => [3,4,1,2,5] After our first iteration our last item is now our largest item
// We repeat this for the whole array length but we can now ignore the 5!
// [3,4,1,2] => [3,4,1,2] => [3,1,4,2] => [3,1,2,4]
// Again our second largest number is now last so we can ignore 4
// [3,1,2] => [1,3,2] => [1,2,3]

// How do we sort?

// Swapping

// ES5

function swap(arr, idx1, idx2) {
  // We intialize a variable called temp which is equal to our first number, this will hold our first number so that we can use it later once we swap it
  // We now set the first number to the second number, if we did not set temp here, we would not be able to use the indx 1 value!
  // finally we set index 2 to temp
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  // We use array destructuring here to swap the numbers
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// Example bubble sort

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
