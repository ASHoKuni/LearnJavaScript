const prompt = require("prompt-sync")();

function checkGrade(x){

 switch(true){
    case(x>=90):
        console.log("S grade")
        break;
    case(x>=80):
        console.log("A grade")
        break;
    case(x>=70):
        console.log("B grade")
        break;
    case(x>=60):
        console.log("C grade")
        break;
    case(x>=50):
        console.log("D grade")
        break;
    case(x>=40):
        console.log("E grade")
        break;
    case(x>=0):
        console.log("Student has failed")
        break;
    default:
        console.log("Invalid marks")
        break;
     
 }
}

// take input as student mark
const x = prompt('Enter Student marks obtained:');
checkGrade(x)