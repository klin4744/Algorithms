// https://www.hackerrank.com/challenges/sock-merchant/problem

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let obj = {};
  let matches = 0;
  for (let i = 0; i < ar.length; i++) {
    obj[ar[i]] ? obj[ar[i]]++ : (obj[ar[i]] = 1);
  }
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let sock = keys[i];
    if (obj[sock] === 1) {
      continue;
    }
    if (obj[sock] % 2 === 0) {
      matches += obj[sock] / 2;
    } else {
      matches += Math.floor(obj[sock] / 2);
    }
  }
  return matches;
}
