function translatePigLatin(str) {
  let testVowel = [];
  let testConsonant =[];
  let editArr = str.split("");
  testVowel = str.match(/[aeiou]/i);
  testConsonant = str.match(/[b-df-hj-np-tv-z]+/i);
  if (testVowel === null){
    return str + "ay";
  }else if (testVowel !== null && str.indexOf(testVowel[0]) == 0 )
  {
    return str + "way";
  }
  editArr.splice(editArr.indexOf(testConsonant[0][0]),testConsonant[0].length)
  editArr.push(testConsonant[0],'a','y');
  str = editArr.join("");
  return str;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("apple"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));