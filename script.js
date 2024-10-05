//==================== CHAP # 12 - 13============================================


// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

//answer---------------

// var char = prompt("Enter a Character");
// document.write(`Character is ${char}</br>`);
// if (char == Number.parseInt(char)) {
//   document.write(`Input is a number </br> </br>`);
// } else if (char == char.toUpperCase()) {
//   document.write(`Input is an uppercase letter </br></br>`);
// } else if (char == char.toLowerCase()) {
//   document.write(`Input is an lowercase letter </br></br>`);
// } else {
//   document.write(`Invalid Character! </br></br>`);
// }

//=============================================================================================

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

//answer---------------

// let num1 = prompt('Enter a first number:');
// let num2 = prompt('Enter a second number:');

// num1 = parseInt(num1);
// num2 = parseInt(num2);

// console.log("Value of num1: ", num1);
// console.log("Value of num2: ", num2);

// if(num1 > num2){
// document.write(`The larger number is: ${num1}`);
// }
// else if(num2 > num1){
// document.write(`The larger number is: ${num2}`);
// }
// else{
//     document.write(`Both numbers are equal!`);
// };

//================================================================================================
// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

//answer---------------

//  var user_num = Number.parseInt(
//     prompt("Enter a number whether check number positive, negative or zero")
//   );
//   document.write(`User Number: ${user_num} </br>`);
//   if(user_num > 0){
//      document.write(`User number ${user_num} is positive `);
//   } else if(user_num < 0){
//     document.write(`User number ${user_num} is Negative `);
//  }else{
//     document.write(`User number ${user_num} is Zero`);
//  };

//==============================================================================================

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

//answer---------------

// let user_charcter = prompt("Enter a single character to check if it is a vowel:");

// let vowels = "aeiou";

// user_charcter = user_charcter.toLowerCase();
// if (vowels.includes(user_charcter)) {
//     document.write(`True! ${user_charcter}, It is a vowel.`);
// } else {
//     document.write(`False! ${user_charcter}, It is not a vowel.`);
// }

//===================================================================================================

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


//answer---------------


// let my_pass = "pakistan";
// let user_pass = prompt('Enter Your Password');

// if (user_pass == "") {
//     alert("Please enter your password");
// } else if (my_pass == user_pass) {
//     document.write(` Correct Password!`);
// }
// else {
//     document.write(`Incorrect password`);
// };

//====================================================================================

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

//answer---------------



// var hour = 13;
// if (hour < 18) {
//     document.write("Good Day!");
// }
// else {
//     document.write("Good evening!");
// };

//=================================================================================================

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements


//answer---------------


// let format = 1900;
// let time = prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):");
// time = parseInt(time);
// if (time >= 0 && time < 1200) {
//     document.write("Good morning!");
// } else if (time >= 1200 && time < 1700) {
//     document.write("Good afternoon!");
// } else if (time >= 1700 && time < 2100) {
//     document.write("Good evening!");
// } else if (time >= 2100 && time <= 2359) {
//     document.write("Good night!");
// }
// else {
//     alert("Invalid time entered.");
// };

//==========================    END  =====================================================
