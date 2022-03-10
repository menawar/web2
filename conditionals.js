//if statement
// the key word if is to used check if a condition is true and to execute the block code

// syntax
// if (condition) {
//   //this part of code runs for truthy condition
// }

// let num = -3;
// if (num > 0) {
//   console.log(`${num} is a positive number`);
// }

// let isRaining = false;
// if (!isRaining) {
//   console.log('Remember to take your rain coat.');
// }

//if else
// If condition is true the first block will be executed, if not the else condition will be executed.

// // syntax
// if (condition) {
//   // this part of code runs for truthy condition
// } else {
//   // this part of code runs for false condition
// }

// let num = -1;
// if (num > 0) {
//   console.log(`${num} is a positive number`);
// } else {
//   console.log(`${num} is a negative number`);
// }

// let isRaining = true
// if (isRaining) {
//   console.log('You need a rain coat.')
// } else {
//   console.log('No need for a rain coat.')
// }
// // You need a rain coat.

// isRaining = false
// if (isRaining) {
//   console.log('You need a rain coat.')
// } else {
//   console.log('No need for a rain coat.')
// }
// // No need for a rain coat.

// If Else if Else

//  We use else if when we have multiple conditions.

// // syntax
// if (condition) {
//      // code
// } else if (condition) {
//    // code
// } else {
//     //  code

// }

// let a = 'tyhe';
// if (a > 0) {
//   console.log(`${a} is a positive number`);
// } else if (a < 0) {
//   console.log(`${a} is a negative number`);
// } else if (a == 0) {
//   console.log(`${a} is zero`);
// } else {
//   console.log(`${a} is not a number`);
// }

// if else if else
// let weather = 'sunny'
// if (weather === 'rainy') {
//   console.log('You need a rain coat.')
// } else if (weather === 'cloudy') {
//   console.log('It might be cold, you need a jacket.')
// } else if (weather === 'sunny') {
//   console.log('Go out freely.')
// } else {
//   console.log('No need for rain coat.')
// }

// switch
// switch is an alternative for if else if else else. The switch statement starts with a switch keyword followed by a parenthesis and code block.
// Inside the code block we will have different cases. Case block runs if the value in the switch statement parenthesis matches with the case value.
// The break statement is to terminate execution so the code execution does not go down after the condition is satisfied.
//The default block runs if all the cases don't satisfy the condition.

// switch(caseValue){
//   case 1:
//     // code
//     break
//   case 2:
//    // code
//    break
//   case 3:
//    // code
//    break
//   default:
//    // code
// }

let weather = 'cloudy';
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.');
    break;
  case 'cloudy':
    console.log('It might be cold, you need a jacket.');
    break;
  case 'sunny':
    console.log('Go out freely.');
    break;
  default:
    console.log(' No need for rain coat.');
}

// let dayUserInput = prompt('What day is today ?');
// let day = dayUserInput.toLowerCase();

// switch (day) {
//   case 'monday':
//     console.log('Today is Monday');
//     break;
//   case 'tuesday':
//     console.log('Today is Tuesday');
//     break;
//   case 'wednesday':
//     console.log('Today is Wednesday');
//     break;
//   case 'thursday':
//     console.log('Today is Thursday');
//     break;
//   case 'friday':
//     console.log('Today is Friday');
//     break;
//   case 'saturday':
//     console.log('Today is Saturday');
//     break;
//   case 'sunday':
//     console.log('Today is Sunday');
//     break;
//   default:
//     console.log('It is not a week day.');
// }

// let num = prompt('Enter number');
// switch (true) {
//   case num > 0:
//     console.log('Number is positive');
//     break;
//   case num == 0:
//     console.log('Numbers is zero');
//     break;
//   case num < 0:
//     console.log('Number is negative');
//     break;
//   default:
//     console.log('Entered value was not a number');
// }

// Ternary Operators

// let isRaining = false;
// isRaining
//   ? console.log('You need a rain coat.')
//   : console.log('No need for a rain coat.');

// loops
// In programming languages to carry out repetitive task we use different kinds of loops

// for Loop

// // For loop structure
// for(initialization, condition, increment/decrement){
//   // code goes here
// }

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }
//  0, 1, 2, 3, 4, 5

// for(let i = 5; i >= 0; i--){
//   console.log(i)
// }

// for (let i = 0; i <= 5; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
// const newArr = [];
// for (let i = 0; i < countries.length; i++) {
//   newArr.push(countries[i].toUpperCase());
// }

// while loop

let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

// do while loop
let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)

// for of loop
// We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.

// for (const element of arr) {
//   // code goes here
// }

// const numbers = [1, 2, 3, 4, 5];

// for (const num of numbers) {
//   console.log(num);
// }

// for (const num of numbers) {
//   console.log(num * num);
// }

// break
// Break is used to interrupt a loop.

// for(let i = 0; i <= 5; i++){
//   if(i == 3){
//     break
//   }
//   console.log(i)
// }

// 0 1 2

// continue
// We use the keyword continue to skip a certain iterations.

// for(let i = 0; i <= 5; i++){
//   if(i == 3){
//     continue
//   }
//   console.log(i)
// }

// // 0 1 2 4 5
