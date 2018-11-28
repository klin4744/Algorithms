// Complete the angryProfessor function below.
function angryProfessor(k, a) {
  let students = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      students++;
    }
  }
  return k <= students ? "NO" : "YES";
}

//https://www.hackerrank.com/challenges/angry-professor/problem
