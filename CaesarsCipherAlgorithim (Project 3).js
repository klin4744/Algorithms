function rot13(str) { // LBH QVQ VG!
  const strArr = str.split("");
  let returnArray = [];
  let code;
  strArr.forEach(function(letter){
    if(letter.match(/[\W]/)){
      returnArray.push(letter)
    }else{
      code = letter.charCodeAt(0) - 13;
      if(String.fromCharCode(code).match(/[0-9\W]/)){
        code = code + 26;
      }
      returnArray.push(String.fromCharCode(code));
    }
  })
  return returnArray.join("");
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"))