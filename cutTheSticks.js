function cutTheSticks(arr) {
  // recursion
  let newArr = [];
  let ans = [];
  let sticksCut = 0;
  if (arr.length === 0) return ans;
  let sorted = arr.slice(0).sort((a, b) => a - b);
  sorted.forEach(num => {
    sticksCut++;
    let test = num - sorted[0];
    if (test > 0) {
      newArr.push(test);
    }
  });
  ans[0] = sticksCut;
  ans = ans.concat(cutTheSticks(newArr));
  return ans;
}
// My first recursion solution
// https://www.hackerrank.com/challenges/cut-the-sticks/problem
