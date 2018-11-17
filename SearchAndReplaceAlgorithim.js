function myReplace(str, before, after) {
  let strArr= str.split(" ");
  let capRegex = /^[a-z]/;
  let beforeArr = before.split("");
  let afterArr = after.split("");
  if(beforeArr[0].match(capRegex) == null){
    afterArr.splice(0,1,afterArr[0].toUpperCase());
    after = afterArr.join("");
  }
  for(let i = 0; i<strArr.length; i++){
    if(strArr[i] == before){
      strArr.splice(i,1,after);
    }
  }
  str = strArr.join(" ");
  return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));