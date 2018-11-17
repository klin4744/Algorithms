function pairElement(str) {
  let strArr = str.split("");
  let result = [];
  for(let i =0; i < strArr.length; i++){
    if(strArr[i] === "A"){
      result.push(["A","T"]);
    }
    else if(strArr[i] === "T"){
      result.push(["T","A"]);
    }
    else if(strArr[i] === "G"){
      result.push(["G","C"]);
    }
    else if(strArr[i] === "C"){
      result.push(["C","G"]);
    }
  }
  return result;
}

console.log(pairElement("ATCGA"));