const array1 = ['apple', 'potato', 'Capitalized Words'];
const array2 = [123, 8897, 42, 1138, 8675309];
const array3 = ['hello', 'world', 123, 'orange'];

// Function to reverse the characters in a string or the digits in a number.
const reverseCharacters = (value) => {
    const valusIsNumber = (typeof value === 'number');
    if(valusIsNumber) {
        // Convert the number to a string, and continue reversing it like a string
        value = value.toString();
    }

    // reversing the value string
    value = value.split('').reverse().join('');

    if(valusIsNumber) {
        // Convert the reversed string back to a number
        value = parseInt(value);
    }

    return value;
}

// Function to reverse the elements in an array and the array too and returns the final reversed array.
const reverseArray = (array) => {
    const reversedElementsArray = [];

    for(let i = 0; i < array.length; i++) {
        // For each element in the old array, call reverseCharacters to flip the characters or digits.
        const reversedElement = reverseCharacters(array[i]);

        // Add the reversed string (or number) to the array
        reversedElementsArray.push(reversedElement);
    }

    return reversedElementsArray.reverse();
}

// Test and Print the result
console.log("Original Array:\n", array1);
console.log("Reversed Array:\n", reverseArray(array1), "\n");

console.log("Original Array:\n", array2);
console.log("Reversed Array:\n", reverseArray(array2), "\n");

console.log("Original Array:\n", array3);
console.log("Reversed Array:\n", reverseArray(array3), "\n");


// Function to calculate the area of a rectangle
const calculateArea = (length, width) => {
    // If only one argument is passed, assume it's a square
    if (width === undefined) {
        width = length;
    }

    // Calculate the area
    const area = length * width;

    // Return the area
    return area;
}
  
// Test cases
const area1 = calculateArea(2, 4);
console.log('length = 2, width = 4');
console.log(`The area is ${area1} cm^2.\n`); // Expected 8.

const area2 = calculateArea(14, 7);
console.log('length = 14, width = 7');
console.log(`The area is ${area2} cm^2.\n`); // Expected 98.

const area3 = calculateArea(20);
console.log('length = 20');
console.log(`The area is ${area3} cm^2.`); // Expected 400.


function funPhrase(str) {
    // Retrieve only the last character from strings with lengths of 3 or less.
   // Retrieve only the first 3 characters from strings with lengths larger than 3.
    const modifiedStr =
    str.length <= 3 ? str.slice(-1) : str.slice(0, 3);
  
    // Use a template literal to return the phrase
    return `We put the '${modifiedStr}' in '${str}'.`;
  }
  
// Test the function
const str = 'Functions rock!';
console.log(funPhrase(str));