function permutationEquation(p) {
  let obj = {};
  let solution = [];
  for (let i = 0; i < p.length; i++) {
    obj[p[i]] = i + 1;
  }
  let sorted = p.sort();
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    solution.push(obj[obj[keys[i]]]);
  }
  console.log(obj, keys, solution);
  return solution;
}
//https://www.hackerrank.com/challenges/permutation-equation/problem
