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
  for (let i = 0; i < alice.length; i++) {
    for (let j = 0; j < scores.length; j++) {
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
      }
    }
  }
  return ans;
}
// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
