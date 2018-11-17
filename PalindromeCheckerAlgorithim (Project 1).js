function palindrome(str) {
  // Good luck!
  let cleanRegex = /[\w]/g;
  let strArr = str.match(cleanRegex);
  let reverseArr = [];
  let cleanArr = strArr.filter(function(letter){
    if(letter === "_"){
      return false;
    }
      return true;
  })
  for(let i = cleanArr.length - 1; i >= 0; i--){
    reverseArr.push(cleanArr[i]);
  }
  const reverseStr = (reverseArr.join("")).toLowerCase();
  const cleanStr = (cleanArr.join("")).toLowerCase();
  console.log(reverseStr)
  console.log(cleanStr)

  if(reverseStr === cleanStr){
    return true;
  }
  return false;
}



console.log(palindrome("eye"));
console.log(palindrome("0_0 (: /-\ :) 0-0"))
console.log(palindrome("1234"));
console.log(palindrome("My age is 0, 0 si ega ym."));