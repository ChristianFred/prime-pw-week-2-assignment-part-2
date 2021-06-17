// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we create a variable called Name and give it the value of Dane.
// then we make a condionanal stating that if name is exactly Mary say in the console "Hi Mary"
// otherwise if the name is not Mary say in the console "How do you do?"
// If this code ran it would give the 2nd responce because Dane =/= Mary

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make 2 variables one for secret and another for code. Code has a vaule currently of 123.
// We make another condotional that reads if code is exactly 123 which it is then the secret is super
// and the code is now itself x2 making it 246.
// we have another if statement that states if code is greater then 250 then secret is duper but because secret is only 246
// it will not come back as duper.
// then we have the console tell us what the secret would be which would come back as super.
//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We have made 3 variables isStudent is a true boolean, age is a number, and zip is a group of numbers.
// another condintional stating if isStudent is exactly true AS WELL as a zip number that is higher then 80000.
// then write to the console "you're a student on the West Coast!"
// else if student is false OR age is less then 30 write in the console "What are your hobbies?"
// else if student is true write Welcome to Prime.
// and finally if student is false AND you are over 30 it'll write in the console "How about the weather"
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
// FIX - colorOne = 'blue'; colors are swapped
let colorTwo = 'blue';
// FIX - colorTwo = 'red'; colors are swapped
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
// FIX if (temp > 39 && time >= 4){ The old code is asking for EITHER OR not AND.
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
// FIX - console.log('enter'); These like in question 4 have been swapped.
} else {
  console.log('enter');
// FIX - console.log('no entry'); These like in question 4 have been swapped.
}
*/
