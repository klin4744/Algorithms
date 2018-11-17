function telephoneCheck(str) {
  // Good luck!
  const phoneRegex = /1?\s?(\([0-9]{3}\))[\s-]?[0-9]{3}[-\s]?[0-9]{4}|1?\s?[0-9]{3}[\s-]?[0-9]{3}[-\s]?[0-9]{4}/
  let test = str.match(phoneRegex);
  if(test === [] || test === null){
    return false;
  }else if(test[0].length !== str.length || test[0].length < 10){
    return false;
  }
 return true;
  
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("(6054756961)"))
console.log(telephoneCheck("2(757)622-7382"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("1 555)555-5555"))
console.log(telephoneCheck("(555)5(55?)-5555"))