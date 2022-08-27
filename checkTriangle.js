const prompt = require("prompt-sync")();

// Function to check if the triangle
// is equilateral or isosceles or scalene
function checkTriangle(x, y, z)
{
     
    // Check for equilateral triangle
    if (x == y && y == z)
        console.log("Equilateral Triangle");
 
    // Check for isosceles triangle
    else if (x == y || y == z || z == x)
        console.log("Isosceles Triangle");
 
    // Otherwise scalene triangle
    else
        console.log("Scalene Triangle");
}
 


// take input
// we take x,y,z as triangle three side value 
const x = prompt('Enter a number x value:');
const y = prompt('Enter a number y value:');
const z = prompt('Enter a number z value:');


checkTriangle(x,y,z)

