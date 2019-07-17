function threeNumberSum(array, targetSum) {
   // Write your code here.
   array.sort((a, b) => a - b);
   let triplets = [];
   for (let i = 0; i < array.length - 2; i++) {
      let left = i + 1;
      let right = array.length - 1;
      while (left < right) {
         let sum = array[i] + array[left] + array[right];
         if (sum === targetSum) {
            triplets.push([array[i], array[left], array[right]]);
         } else if (sum < targetSum) {
            left++;
         } else {
            right--;
         }
      }
   }
   return triplets;
}
