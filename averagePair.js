// Multiple Pointers averagePair
// write a function called averagePair. Given a sorted array of integers
// and a target average, determine if there is a pair of values in there
// array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Constraints:
// Time: O(N)
// Space: O(1)

function averagePair(arr, avg) {
  if (arr.length === 0) {
    return false;
  }
  let pointer1 = 0;
  let pointer2 = arr.length - 1;
  while (pointer1 < pointer2) {
    let average = (arr[pointer1] + arr[pointer2]) / 2;
    if (avg === average) {
      return true;
    } else if (average > avg) {
      pointer2--;
    } else if (average < avg) {
      pointer1++;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 99));
