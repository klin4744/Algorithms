function pickingNumbers(a) {
  // Write your code here
  let maxLength = 0;
  let prevMax = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (Math.abs(a[i] - a[j]) <= 1 && a[i] >= a[j]) {
        prevMax++;
      }
    }
    maxLength = Math.max(prevMax, maxLength);
    prevMax = 0;
  }
  console.log(maxLength);
  return maxLength;
}
// https://www.hackerrank.com/challenges/picking-numbers/problem
