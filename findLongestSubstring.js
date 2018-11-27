// Write a function called minSubArrayLen which accepts two parameters
// an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous
// subarray of which the sum is greater than or equal to the integer
// passed into the function. If there isn't one, return 0 instead.

//MUST HAVE TIME COMPLEXITY OF O(N)

function minSubArrayLen(arr, n) {
  // Intialize variables
  let start = 0; //Start denotes the begining of our sliding window
  let end = 0; // End denotes the end of our sliding window
  let minLength = Infinity; // Min length is set to some large number, we want to be able to replace min length in all cases except the case where we cannot find a subset of the array that sums to the number
  let total = 0; // Total is a variable that holds the sum of our subarray

  // We use a while loop because we want this loop to continuously run until our conditions are met, we don't use for because we don't know specifically how many iterations itll take to get an answer. We declare start < n because it would not make sense if our window went outside our array length.
  while (start < arr.length) {
    //Our first if statement checks if our total sum for our sliding window is less than n, the number we have to add up to or pass. We also make sure that the end of the array stays in bound of the arr length. If our sum is not large enough, we expand our shifting window by increasing the end index. Note that we did not add the new value at arr[end] after we incremented end. This is because we want to abide by the 0 index of the array when we find the total length later on.

    //Our else if statement checks if our total is longer or equal to n, if this is true, it will reduce the shifting window by shifting our start to the left. Also in the case where total >= n, we have met our criteria so we can set the minLength here. We ignore cases where the new minLength is greater than our old minLength.

    //Finally we leave a break statement if we reach the end of our array via end being equal to arr.length.

    if (total < n && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= n) {
      minLength = Math.min(minLength, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }
  // If we were never able to reach the condition where total >= n, minLength remains at infinity and its safe to assume there are no subarrays that matches the criteria. We return 0 in that case and minLength in the case that we did hit that criteria.
  return minLength === Infinity ? 0 : minLength;
}
