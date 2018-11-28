// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
  let ans = 0;
  for (i; i <= j; i++) {
    if (
      Math.abs(
        parseInt(
          i
            .toString()
            .split("")
            .reverse()
            .join("")
        ) - i
      ) %
        k ===
      0
    ) {
      ans++;
    }
  }
  return ans;
}

// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
