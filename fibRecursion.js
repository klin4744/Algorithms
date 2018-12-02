function fib(n) {
  // add whatever parameters you deem necessary - good luck!
  let fibArr = [];
  let sum = 0;
  function helper(fibArr, n) {
    if (n <= 0) return;
    fibArr.push((fibArr[0] || 1) + (fibArr[1] || 0));
    sum = fibArr[0] + (fibArr[1] || 0);
    fibArr.length === 3
      ? helper(fibArr.slice(1), n - 1)
      : helper(fibArr, n - 1);
  }
  helper(fibArr, n);
  return sum;
}

console.log(fib(35));
console.log(fib(2));
console.log(fib(4));
