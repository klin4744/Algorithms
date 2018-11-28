function pageCount(n, p) {
  /*
   * Write your code here.
   */
  // n = total number of pages in the book
  // p = page we need to land on
  // if we can start from the last page, find the least amount of pages to turn to get to p
  // if we start from the back, we have pages n-1, n, if we start from front, we only have
  // page 1
  let totalFront = 0; //Total number of pages we have to turn if we start from the front
  let totalBack = 0; // Total number of pages we have to turn if we start from the back

  // handle initial and end condiitons
  let start = 0;
  let end = 1;
  // First turn from the front
  while (start < n) {
    if (end >= n) {
      end = n;
      break;
    }
    if (start !== p && end !== p) {
      start += 2;
      end += 2;
      totalFront++;
    } else {
      break;
    }
  }
  // Now turn from the back

  if (n % 2 !== 0) {
    end = n - 1;
    start = n;
  } else {
    start = n + 1;
    end = n;
  }
  while (start > 0) {
    if (end <= 0) {
      end = 0;
      break;
    }
    if (start !== p && end !== p) {
      start -= 2;
      end -= 2;
      totalBack++;
    } else {
      break;
    }
  }
  return Math.min(totalBack, totalFront);
}
// https://www.hackerrank.com/challenges/drawing-book/problem
