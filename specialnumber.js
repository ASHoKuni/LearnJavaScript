
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

// const n = 145;
const n = prompt("Enter a positive integer : ");
var temp = n;
var sumOfFactorial = 0;

while (temp > 0){
            let r = temp % 10;
            sumOfFactorial += factorial(r);
            temp = parseInt(temp / 10);
}

if(n==sumOfFactorial)
{
    console.log("Special Number" );
}
else
{
    console.log("Not Special Number" );
}