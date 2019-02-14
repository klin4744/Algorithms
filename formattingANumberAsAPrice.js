var numberToPrice = function(number) {
  if (typeof number !== "number") {
    return "NaN";
  }
  let strArr = number.toString().split(".");
  let newStr = "";
  let i = 0;
  console.log(strArr[0], strArr[1]);
  if (strArr[0].length >= 4) {
    while (i < strArr[0].length) {
      if (i === 0) {
        if (strArr[0].length % 3) {
          let indexToStop = strArr[0].length % 3;
          if (strArr[0][0] === "-") {
            indexToStop += 3;
          }
          if (indexToStop === strArr[0].length) {
            break;
          }
          newStr += strArr[0].slice(0, indexToStop) + ",";
          i += indexToStop;
        } else {
          newStr += strArr[0].slice(0, 3) + ",";
          i += 3;
        }
      } else {
        if (i + 3 === strArr[0].length) {
          newStr += strArr[0].slice(i, i + 3);
        } else {
          newStr += strArr[0].slice(i, i + 3) + ",";
        }
        i += 3;
      }
      console.log(newStr);
    }
  }
  if (!strArr[1]) {
    strArr[1] = "00";
  } else if (strArr[1].length === 1) {
    strArr[1] += "0";
  } else if (strArr[1].length > 2) {
    strArr[1] = strArr[1].slice(0, 2);
  }
  return [newStr || strArr[0], strArr[1]].join(".");
};
//https://www.codewars.com/kata/5318f00b31b30925fd0001f8/train/javascript
