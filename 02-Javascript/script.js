"use strict";

// const interface = "Cat";
// console.log(interface);
// const private = 543;
// console.log(private);

// let hasLicense = false;
// const passDrivingTest = true;

// if (passDrivingTest) hasLicense = true;
// if (hasLicense) console.log("I can drive");

//Functions in JavaScript

// function printer() {
//   //function definition
//   console.log("My name is Rahul");
// }

// printer(); // function calling

// function fruitProcessor(apples, oranges) {
//   let juice = `Juice with ${apples}apples and ${oranges}oranges`;
//   return juice;
// }

// let appleJuice = fruitProcessor(4, 0);
// console.log(appleJuice);

// let orangeJuice = fruitProcessor(0, 4);
// console.log(orangeJuice);

// //function declaration and Funtion Expression -different ways of writing the function
// function calci1(birthYear) {
//   return 2024 - birthYear;
// }
// const age1 = calci1(1998);

// const calci2 = function (birthYear) {
//   return 2024 - birthYear;
// };
// const age2 = calci2(2000);

// //Arrow funcion= part of function expression
// let calci3 = (birthYear) => {
//   return 2024 - birthYear;
// };
// let age3 = calci3(2003);

// console.log(age1, age2, age3);

// //Hoisting- Happens in variables declare with var and with function declarations that we can usethem before writing function as it just adds the func or variable to top so that it can give answer. In case of var, it just takes the variable above without its value so it isshown undefined there and hen add the name.

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   let juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(4, 0);
// const mixedJuice = fruitProcessor(2, 2);
// console.log(appleJuice);
// console.log(mixedJuice);

//Introduction to Arrays
// const friends = ["Rahul", "Ajay", "Mohit"];
// let year = new Array(1998, 1999, 2003, 2000);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[friends.length - 1]);
// console.log(friends.length);

// friends[2] = "Gaurav"
// console.log(friends[2]);

// const calAge = function (birthYear) {
//   return 2024 - birthYear;
// };

// const birthYear = [1990, 1967, 2010, 2018];
// let age1 = calAge(birthYear[0]);
// let age2 = calAge(birthYear[1]);
// let age3 = calAge(birthYear[2]);
// let age4 = calAge(birthYear[3]);
// console.log(age1);
// console.log(age2);
// console.log(age3);
// console.log(age4);

//Basic array methods
// const friendsNew = ["Rahul", "Raj", "Vansh"];
// friendsNew.push("Mohit");
// console.log(friendsNew);

// friendsNew.unshift("Garvitt");
// console.log(friendsNew);

// friendsNew.pop();
// console.log(friendsNew);

// friendsNew.shift();
// console.log(friendsNew);

// console.log(friendsNew.indexOf("Raj"));
// console.log(friendsNew.includes("Aarohi"));

// function sayHi() {
//   console.log(name);
//   var name = "Jonny";
// }

// sayHi();

// let url = "https://cat-fact.herokuapp.com/#/";

// let getdata = async () => {
//   let response = await fetch(url);
//   console.log(response);
//   let data = await response.json();
//   console.log(data);
// };
