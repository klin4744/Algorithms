// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
  let wordIndx = [];
  let numsArr = [];
  for (let i = 0; i < word.length; i++) {
    wordIndx.push(word.charCodeAt(i) - 97);
  }
  console.log(wordIndx);
  for (let i = 0; i < wordIndx.length; i++) {
    numsArr.push(h[wordIndx[i]]);
  }
  return Math.max(...numsArr) * word.length;
}
// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
