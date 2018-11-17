function convertHTML(str) {
  // &colon;&rpar;
  let strArr = str.split("");
  let specialChar = str.match(/[\W]/);
  if (specialChar == null){
    return str;
  }else if(specialChar !== null){
    for(let i=0; i< strArr.length; i++){
      switch(strArr[i]){
        case "<" :
        strArr.splice(strArr.indexOf("<"),1,"&lt;")
        break;
        case ">" :
        strArr.splice(strArr.indexOf(">"),1,"&gt;")
        break;
        case "/" :
        strArr.splice(strArr.indexOf("/"),1,"&sol;")
        break;
        case '"' :
        strArr.splice(strArr.indexOf('"'),1,"&quot;")
        break;
        case "'" :
        strArr.splice(strArr.indexOf("'"),1,"&apos;")
        break;
        case "©" :
        strArr.splice(strArr.indexOf("©"),1,"&copy;")
        break;
        case "&" :
        strArr.splice(strArr.indexOf("&"),1,"&amp;")
        break;

      }
    }
  }

  return strArr.join("");
}

console.log(convertHTML("Dolce & Gabbana"));