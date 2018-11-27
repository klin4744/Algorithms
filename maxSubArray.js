// Given an array of integers and a number, write a function called
// maxSubarraySum, which finds the maximum sum of a subarray with
// the length of the number passed to the function

// Note that a subarray must consist of consecutive elements from
// the original array.

// Time Complexity - O(N)
// Space Complexity - O(1)

function maxSubarraySum(arr, n) {
  let maxNum = 0;
  let currentSum = 0;
  if (n > arr.length) return null;
  for (let i = 0; i < n; i++) {
    maxNum += arr[i];
  }
  currentSum = maxNum;
  for (let i = n; i < arr.length; i++) {
    currentSum = currentSum + arr[i] - arr[i - n];
    maxNum = Math.max(maxNum, currentSum);
  }
  return maxNum;
}
console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
