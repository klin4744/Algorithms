function jumpingOnClouds(c, k) {
  let e = 100;
  if (k >= c.length && c[0] === 0) return 99;
  if (k >= c.length && c[0] === 1) return 97;
  for (let i = 0; i < c.length; i += k) {
    if (i === c.length - 1) {
      if (c[0] === 1) {
        e -= 2;
      }
      e--;
      break;
    }
    if (c[i + k] === 1) {
      e -= 2;
    }
    e--;
  }
  return e;
}
