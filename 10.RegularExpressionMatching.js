/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let regex = `/${p}/`;
  if (!s.match(p)) return false;
  return s.match(p)[0].length === s.length;
};

//https://leetcode.com/problems/regular-expression-matching/
