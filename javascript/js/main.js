console.log("JavaScript is running");

// alert("Hello World");
// alert("Hello world 2");

// This is a comment and will not be read by the browser

/*
This is a multi-line comment
and will not be read by the browser
*/

// Variables
// A variable is a container for a value
let message;
const message2 = "Hello World";
message = "Welcome to the world of JavaScript";

// message2 = "Welcome to the world of JavaScript";

console.log(message2);

let name = "John Doe",
  age = 25,
  isMarried = true;

console.log(
  name +
    " is " +
    age +
    " years old and is " +
    (isMarried ? "married" : "not married")
);

let admin, _name;
_name = "John";
admin = _name;
// alert(admin);

let nameOfPlanet = "Earth";
let webVisitor = "John Doe";

console.log(typeof nameOfPlanet);

// Data Types
// String
let myName = "John Doe"; // String data type
console.log("2" + "2"); // 22
console.log(2 + 2); // 4

// Number
let myAge = 25; // Number data type

// Boolean
let _isMarried = true; // Boolean data type

// Float
let myHeight = 1.75; // Float data type

// Null
let myNull = null; // Null data type

// Undefined
let myUndefined; // Undefined data type

let speed = 100;
let time = 10;
let carName = "Volvo";

console.log(`${carName} is going ${speed * time} km/h`);

// access a button
let btn = document.getElementById("btn");
let count = 0;

btn.addEventListener("click", function () {
  count++;
  btn.innerText = `You clicked ${count} times`;
});

// Functions
function greet() {
  console.log("Hello World");
}

greet();

function sayMyName() {
  console.log("John Doe");
}

sayMyName();

// function greetings(name) {
//     console.log(`Hello ${name}`);
// }

// greetings("Arinda")
// greetings("John")
// greetings("Jane")

// If statements
let n = 10;
if(n > 10) {
    console.log("n is greater than 10");
} 

if(n < 10) {
    console.log("n is less than 10");
} else {
    console.log("n is not less than 10");
}

function greetings(dayTime, name) {
  if (dayTime === "morning") {
    console.log(`Good morning ${name}`);
  } else if (dayTime === "afternoon") {
    console.log(`Good afternoon ${name}`);
  } else if (dayTime === "evening") {
    console.log(`Good evening ${name}`);
  } else {
    console.log(`Hello ${name}`);
  }
}

greetings("morning", "Arinda")


let check = document.getElementById("check");
let _age = document.getElementById("number");

check.addEventListener("click", function () {
    if(_age.value > 18) {
        alert("You are eligible to vote");
    } else {
        alert("You are not eligible to vote");
    }
})


function checkDay(day = "monday") {
    if(day === "monday") {
        console.log("Today is Monday");
    } else {
        console.log("Today is not Monday");
    }
}
checkDay()
checkDay("Tuesday");

// Arrays []
//              0         1         2      3
let fruits = ["Apple", "Orange", "Banana", "Mango"];

// indexing arrays
console.log(fruits)
console.log(fruits[0])
console.log(fruits[3])
console.log(fruits[2])
console.log(fruits[4])

// print all the elements in the array
for(let item in fruits) {
    console.log(fruits[item])
}

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

let i = 0;
while(i < fruits.length) {
    console.log(fruits[i])
    i++;
}


//  Array Methods
// 1. push() - add an element to the end of the array
let fruit = prompt("Enter a fruit");
fruits.push(fruit);
console.log(fruits);

let number = prompt("How many fruits do you want to add?");
for(let i = 0; i < number; i++) {
    let fruit = prompt(`Enter fruit ${i + 1}: `);
    fruits.push(fruit);
}
console.log(fruits);

// 2. pop() - remove an element from the end of the array
console.log(fruits.pop());
console.log(fruits);


// 3. unshift() - add an element to the beginning of the array
fruits.unshift("Pineapple")
console.log(fruits);

// 4. shift() - remove an element from the beginning of the array
fruits.shift();
console.log(fruits);

// 5. splice() - remove an element from a specific position in the array
fruits.splice(2, 1);
console.log(fruits);


// create an array of movies and do the following
// 1. add a movie to the end of the array
// 2. remove a movie from the end of the array
// 3. add a movie to the beginning of the array
// 4. remove a movie from the beginning of the array
// 5. remove a movie from a specific position in the array
