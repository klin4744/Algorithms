function findDigits(n) {
  let divisors = 0;
  const numStr = n.toString();
  for (let i = 0; i < numStr.length; i++) {
    if (n % parseInt(numStr[i]) === 0) {
      divisors++;
    }
  }
  return divisors;
}
//https://www.hackerrank.com/challenges/find-digits/problem
