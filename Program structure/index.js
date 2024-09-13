let ten = 10;
console.log(ten * ten);
// → 100
let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105
let one = 1,
  two = 2;
console.log(one + two);
// → 3
var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda
let x = 30;
console.log("the value of x is", x);
// → the value of x is 30
console.log(Math.max(2, 4));
// → 4
console.log(Math.min(2, 4) + 100);
// → 102
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}
let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 0
// → 2
//   … etcetera
let result = 1;
let counter = 0;
while (counter < 10) {
  result *= 2;
  counter += 1;
}
console.log(result);
// → 1024
if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
    console.log("No surprise there.");
  }
}
for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}
// → 0
// → 2
//   … etcetera
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21
for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}
if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
