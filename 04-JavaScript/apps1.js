var sum = 10 + 10; //make this equal to 20 by changing the 0 into the appropriate number.
console.log(sum);

var difference = 45 - 33; //make this equal to 12 by changing the 0 into the appropriate number.
console.log(difference);

var product = 8 * 10; //make this equal to 80 by changing the 0 into the appropriate number.
console.log(product);

var quotient = 66 / 33; //make this equal to 2 by changing the 0 into the appropriate number.
console.log(quotient);

// Create a number with a decimal point here called myDecimal
var myDecimal = 12.12;
console.log(myDecimal);

var quotient = 4.4 / 2.0; // equals 2.2
var product = 2.0 * 2.5; // equals 5.0
console.log(product);

// A new array called myArray that contains both a string and a number
var myArray = ["a string", 12];
console.log(myArray);

// A nested array called myArray2.
var myArray2 = [["inception", "array"], 12];
console.log(myArray2);

// A variable called myData set iequal to the first value of myArray3.
var myArray3 = [1,2,3];
// Only change code below this line.
var myData = myArray3[0];
console.log(myData);

// Modify the data stored at index 0 of myArray to the value of 3.
var myArray = [1,2,3];
myArray[0] = 3;
console.log(myArray);

// Used the .pop() function to remove the last item from myArray.
var myArray = ["John", 23, ["cat", 2]];

var removed = myArray.pop(); // This should be ["cat", 2] and myArray should now be ["John", 23]
console.log(removed);

// Takes the myArray array and push() this value to the end of it: ["dog", 3].
var myArray = ["John", 23, ["cat", 2]];
myArray.pop();
//Add a ["dog", 3] to the end of myArray using push()
// Only change code below this line.
myArray.push(["dog", 3]);
console.log(myArray);

// Takes the myArray array and shift() the first value off of it.
var myArray = ["John", 23, ["dog", 3]];
var myRemoved = myArray.shift(); // This should be ["John"] and myArray should now be [23, ["dog", 3]]
console.log(myArray);

var myArray = ["John", 23, ["dog", 3]];
myArray.shift();

// Add "Paul" to the start of myArray
myArray.unshift("Paul");
console.log(myArray);

var a = 4;
var b = 5;
// Create a function called myFunction that returns the value of a plus b.
// Only change code below this line.
function myFunction() {
  return a+b;
}

// an Object that represents a dog called myDog which contains the properties
// 'name' (String), 'legs' (Number), 'tails' (Number) and 'friends' (Array)
var myDog = {
    name: "Scooby",
    legs: 4,
    tails: 1,
    friends: ["Thelma", "Shaggy"]
};
console.log(myDog);

// Let's add the property bark to myDog
myDog.bark = "Woof";

// Now delete the property tails
delete myDog.tails;

console.log(myDog);

// Loops
var myArray = [];
//Push the numbers zero through four to myArray using a "for loop".
for(var i = 0; i <5; i++) {
  myArray.push(i);
}
console.log(myArray);

// While Loops
var myArray = [];
//Push the numbers zero through four to myArray
var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);

// Random Numbers
function myFunction() {
  return Math.random();
}
console.log(Math.random());

// Generate Random Whole Numbers with JavaScript
function myFunction(){
  // Make myFunction return a random number between zero and nine> instead of a decimal  
  return Math.floor(Math.random() *10);
}
console.log(Math.floor(Math.random() *10));

// Generate Random Whole Numbers within a Range
var min = 0;
var max = 9;
function myFunction() {
  // Make myFunction return a random number between zero and nine instead of a decimal
  var returnValue = Math.floor(Math.random() * (max - min +1) + min);
  console.log(returnValue);
  return returnValue;
}
myFunction();

// Use Conditional Logic with IfElse Statements
function myFunction(){
  var flip = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
  // Create an if-else statement here to return "heads" if flip is 0. Otherwise return "tails".

  if (flip === 0) {
    return "heads";
  } else {
    return "tails";  
  }
}
console.log(myFunction());

// Sift through Text with Regular Expressions
var testString = "George Boole and Alan Turing went to the shop and got some milk";
var expressionToGetMilk = /milk/gi;
var expressionToGetAnd = /and/gi;

var matches = testString.match(expressionToGetAnd);
console.log(matches);
console.log(testString.match(expressionToGetAnd).length);

// Find Numbers with Regular Expressions
var testString = "There are 3 cats but 4 dogs.";
var expression = /\d+/gi;
var numberOfNumbers = testString.match(expression).length;
console.log("Number of Numbers = " + numberOfNumbers);

// Find White Space with Regular Expressions
var testString = "How many spaces are there in this sentence?";
var expression = /\s+/gi;
var numberOfSpaces = testString.match(expression).length;
console.log("Number of Spaces = " + numberOfSpaces);

// Invert Regular Expression Matches with JavaScript
var testString = "How many non-space characters are there in this sentence?";
var expression = /\S/gi;
var numberOfNonSpaces = testString.match(expression).length;
console.log("Number of Non Spaces = " + numberOfNonSpaces);
