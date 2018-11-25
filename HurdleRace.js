// Complete the hurdleRace function below.
function hurdleRace(k, height) {
// k = maximum height that can be jumped naturally
// height = array of heights
    const maximum = Math.max(...height);
    const doses = maximum - k;
    if (doses < 0) {
        return 0
    }
    return doses

}
// https://www.hackerrank.com/challenges/the-hurdle-race/problem