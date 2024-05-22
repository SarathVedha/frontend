// Create a new Array object
var myArray = new Array();

// Add some values to the Array object
myArray[0] = 1;
myArray[1] = 2;
myArray[2] = 3;

// Get the length of the Array object
var length = myArray.length;

// Loop through the Array object and print each value
for (var i = 0; i < length; i++) {
  console.log(myArray[i]);
}

// Create a new String object
var myString = new String("Hello, world!");

// Get the length of the String object
var length = myString.length;

// Print the String object
console.log(myString);

// Create a new Number object
var myNumber = new Number(10);

// Add 5 to the Number object
myNumber += 5;

// Print the Number object
console.log(myNumber);

// Create a new Boolean object
var myBoolean = new Boolean(true);

// Test the Boolean object
if (myBoolean) {
  console.log("The Boolean object is true.");
} else {
  console.log("The Boolean object is false.");
}

// Create a new Date object
var myDate = new Date();

// Get the current date and time
var date = myDate.getDate();
var month = myDate.getMonth();
var year = myDate.getFullYear();
var hours = myDate.getHours();
var minutes = myDate.getMinutes();
var seconds = myDate.getSeconds();

// Print the date and time
console.log("The current date and time is: " + date + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds);

// Use the Math object to calculate the square root of 10
var squareRoot = Math.sqrt(10);

// Print the square root
console.log("The square root of 10 is: " + squareRoot);

// Use the JSON object to parse a JSON string
var jsonString = '{ "name": "John Doe", "age": 30 }';
var jsonObject = JSON.parse(jsonString);

// Get the name and age from the JSON object
var name = jsonObject.name;
var age = jsonObject.age;

// Print the name and age
console.log("The name is: " + name);
console.log("The age is: " + age);

// Use the RegExp object to match a regular expression
var regex = /Hello, world!/g;
var match = regex.exec("Hello, world!");

// Print the match
console.log("The match is: " + match);