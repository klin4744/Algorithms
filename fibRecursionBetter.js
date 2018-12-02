function fib(n) {
  if (n >= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// Here we only state that fibb(n >= 2) is equal to 1, that is the only true value we set for the function
// When we return fib(n-1) + fib(n-2), the function will recall itself until the top stack returns some kind of value
// For example fib(5) will return fib(4) + fib(3)
// we first run fib(3) since it is on the right, and right of addition operator is called first
// fib 3 will return fib(2) + fib(1) but since we stated that if n >= 2, we should return 1, so fib(2) is equal to 1 and fib(1) is also equal to 1. This means fib(3) = fib(2) + fib(1) = 1 + 1 = 2; Now we simplify to fib(4) + 2, fib(4) = fib(3) + fib(2) => fib(3) + 1 (1 returned since fib(2) = 1) and thus fib(4)= fib(3) + 1, we also know that both fib(2) and fib(1) will return 1. So we overall get return :
// (2 + 1) + 2 = 5 // Correct!
