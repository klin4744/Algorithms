function birthday(s, d, m) {
//m the number of months, length of array must equal m
//s is an array of integers (input)
//d is the day, array elements we return must equal to d
//return the number of arrays that follow the conditions: array is size m, array sum is d, and 
//numbers are consecutive

// Create variables
let totalMatches = 0;  //Total matches tells us how many matches we have, we will return this

// Create a loop to loop through array elements
    for (let i = 0; i < s.length; i++){
        // use another loop to match to the length of m
        let sum = s[i];
        for (let j = i+1 ; j < m+i; j++){
            sum += s[j];
        }
        if (sum === d) {
            totalMatches++;
        }
    }
    console.log(totalMatches)
    return totalMatches;
   
}

//https://www.hackerrank.com/challenges/the-birthday-bar/problem