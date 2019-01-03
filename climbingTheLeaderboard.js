function climbingLeaderboard(scores, alice) {
  let places = [];
  let ans = [];
  let currentPlace = 1;
  let currentItem = scores[0];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === currentItem) {
      places.push(currentPlace);
    } else if (scores[i] < currentItem) {
      currentItem = scores[i];
      currentPlace++;
      places.push(currentPlace);
    }
  }
  alice.sort((a, b) => a - b);
  let j = scores.length - 1;
  for (let i = 0; i < alice.length; i++) {
    while (j >= 0) {
      if (alice[i] == scores[j]) {
        ans.push(places[j]);
        break;
      } else if (alice[i] < scores[j] && alice[i] > scores[j + 1]) {
        ans.push(places[j] + 1);
        break;
      } else if (alice[i] > scores[0]) {
        ans.push(1);
        break;
      } else if (alice[i] < scores[scores.length - 1]) {
        ans.push(places[places.length - 1] + 1);
        break;
      } else {
        j--;
      }
    }
  }
  return ans;
}
// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
