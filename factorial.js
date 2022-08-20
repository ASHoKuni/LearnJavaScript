const prompt = require("prompt-sync")();

function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}

// take input
const n = prompt('Enter a number :');


answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);