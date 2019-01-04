/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function(str, len) {
  // Your code goes here
  let strArr = str.split(" ");
  let result = "";
  let currentLength = 0;
  let currentStrArr = [];
  let spaces = 0;
  let spacesBtwn = 0;
  let whiteSpace = "";
  let prevLength = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] + strArr[i + 1] > 30) {
      spaces = len - strArr[i].length;
      for (let j = 0; j <= spaces; j++) {
        whiteSpace += " ";
      }
      result += strArr[i] + whiteSpace + "\n";
      whiteSpace = "";
      currentStrArr = [];
      currentLength = 0;
    } else {
      currentLength += strArr[i].length + 1;
      if (currentLength === len) {
        for (let k = 0; k < currentStrArr.length; k++) {
          result += currentStrArr[k] + " ";
        }
        result += "\n";
      }
      if (currentLength > len) {
        spaces = currentLength - len;
        spacesBtwn = Math.ceil(spaces / (currentStrArr.length - 1));
        for (let k = 0; k < currentStrArr.length; k++) {
          let iterations = spaces - spacesBtwn < 0 ? spaces : spacesBtwn;
          for (let a = 0; a <= iterations; a++) {
            whiteSpace += " ";
          }
          if (k !== currentStrArr.length - 1) {
            result += currentStrArr[k] + whiteSpace;
          } else {
            result += currentStrArr[k];
          }
          spaces -= spacesBtwn;
          whiteSpace = "";
        }
        result += "\n";
        currentStrArr = [];
        currentLength = 0;
      }
      currentStrArr.push(strArr[i]);
    }
  }
  console.log(result);
  return result;
};
// https://www.codewars.com/kata/537e18b6147aa838f600001b/train/javascript
