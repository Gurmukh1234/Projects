// let fname = "Rahul";
// console.log(fname);

// console.log(10 + 20 * 30);

// //Variables Rules
// //Never start a variable name with number
// //let 6years=6;//Error
// let years6 = 6;
// let year6s = 6;

// //2. You can create variable name with underscore or $ symbol
// let my_name = "Rahul";
// let __name__ = "Rahul";

// let $name = "Gaurav";

// //3. Never use reserved keyword for variable name
// //let function="hello"//Error

// //4. Use descriptive variable name
// let job1 = "Tester";
// let job2 = "Developer";

// let my_first_job = "Tester";
// let my_current_job = "Developer";

// //Values(7 primitive data types)
// //number
// let age = 21;
// console.log(age);
// console.log(typeof age);

// //string
// let lname = "Sharma";
// console.log(lname);
// console.log(typeof lname);

// //boolean
// let isAdult = True;
// console.log(isAdult);
// console.log(typeof isAdult);

// //undefined= value from variable which is not defined
// let job;
// console.log(job);
// console.log(typeof job);

// //js has dynamic typing
// let a =2;
// console.log(a);
// //Updating a variable
// a="Hello"
// console.log(a);

//let,const,var
//let=cannot be redeclared, but can be reinitialized or update
// let vari1=2;
// console.log(vari1);
// vari1=4;
// console.log(vari1)
//Block scope variable

//const = cannot be redeclared or reinitialized. Cannot left undefined also need to initialize it once
// const var2=6;
// const var3;
//Block scope variable

//var= used till 2015, ES6 can be redeclared,reinitialized, global scope, used for hoisting

//let age=24;
//const birthYear=1998

//Operators in JS
//Arithmetic Operators
//Assignment Operators
//Comparison Operators

//Arithmetic Operators(+,-,*,/,**,%)
// let currentYear=2024;
// let ageRahul= currentYear-1998
// let ageVishal=currentYear-2000
// console.log(ageRahul , ageVishal)
// console.log(ageRahul*2 , ageVishal)
// console.log(ageRahul/3 , ageVishal)
// console.log(ageRahul , ageVishal, 2**3)

// fname="Rahul"
// lname ="Sharma"
// console.log(fname + ' ' + lname)

// let x=10;
// let y =10+5
// console.log(y);

// console.log(9%2);
// console.log(8%2);

//Assignment Operators(=,+=,-=,*=,/=,%=,**=,++,--)
// let x = 20;
// let y = x;

// x += 10;
// x /= 2;
// x *= 4;
// x -= 10;
// console.log(x, y);

// x = x + 10;
// x++;
// x++;
// x--;
// x--;
//x %= 2;
// let x = 15;
// x **= 2;

// console.log(x);

//Comparison Operator(<.>, <=,>=,==)
// const currentYear = 2024;
// let ageRahul = currentYear - 1998;
// let ageVishal = currentYear - 2000;
// console.log(ageRahul, ageVishal);

// let isRahulGreater = ageRahul > ageVishal;
// console.log(isRahulGreater);

// console.log(currentYear - 1998 > currentYear - 2002);

//Operator Precedance
// 18= ()
// 13 =** Right to left
// 12=*,/,% Left to Right
// 11=+,- Left to right
//09 <,<=,>,>= Left to Right
//02 =,+=,-=,.....
//15 x++,x--,
//14 ++x,--x,!x, +x,-x
//8 ==,!=,===,!== Left to right

// console.log(currentYear-1998 > currentYear - 2002);
// console.log((20 / 2) * 2);
// console.log(20 / (2 * 2));

// const perfume = {
//   brandName: "Chanel",
//   fragrance: "Mild",
//   price: 499,
//   isDeal: true,
// };

// console.log(perfume);
// console.log(perfume["brandName"]);

// // perfume["price"] = perfume["price"] + 1;
// // console.log(perfume["price"]);
// // perfume["brandName"] = "Gucci";
// // console.log(perfume["brandName"]);

// perfume.price = 600;
// console.log(perfume.price);

// perfume.brandName = "Gucci Flora";
// console.log(perfume.brandName);

// let a = 5;

// console.log(a);
// a++;
// a++;
// console.log(a);

// let x = prompt("Enter any number:");

// if (x % 5 === 0) {
//   console.log("Multiple of 5");
// } else {
//   console.log("Not");
// }

// let score = prompt("Enter your grade:");
// if (score >= 90 && score <= 100) {
//   console.log("A");
// } else if (score >= 70 && score <= 89) {
//   console.log("B");
// } else if (score >= 60 && score <= 69) {
//   console.log("C");
// } else if (score >= 50 && score <= 59) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// let sum = 0;
// for (let i = 1; i <= 5, i++; ) {
//   sum = sum + i;
// }
// console.log(sum);

// let i =1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// for (let i = 1; i <= 100, i++; ) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// let gnum = 25;
// x = prompt("Guess any num: ");

// while (x != gnum) {
//   x = prompt(" You are wrong,Guess again: ");
// }
// console.log("Congratulations");

// let n1 = 7;
// n2 = 6;

// if (n1 > n2) {
//   console.log("n1 is greater which is equal to ", n1);
// } else {
//   console.log("n2 is greater which is equal to ", n2);
// }

// x1 = prompt("Enter number:");
// x2 = prompt("Enter number:");
// x3 = prompt("Enter number:");

// if (x1 > 0 && x2 > 0 && x3 > 0) {
//   let product = x1 * x2 * x3;
//   let sign = "+";
//   console.log("product:", product, "sign:", sign);
// } else {
//   let product = x1 * x2 * x3;
//   let sign = "-";
//   console.log("product:", product, "sign:", sign);
// }

// let n1 = 5;
// let n2 = 6;
// let n3 = 9;
// let n4 = 2;
// let n5 = 4;

// if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
//   console.log("n1 : ", n1, "is greatest among the five numbers");
// } else if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
//   console.log("n2 : ", n2, "is greatest among the five numbers");
// } else if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
//   console.log("n3 : ", n3, "is greatest among the five numbers");
// } else if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
//   console.log("n4 : ", n4, "is greatest among the five numbers");
// } else {
//   console.log("n5 : ", n5, "is greatest among the five numbers");
// }

// for (let i = 0; i <= 15; i++) {
//   if (i === 0) {
//     console.log(i + " Is even");
//   } else if (i % 2 === 0) {
//     console.log(i + " Is even");
//   } else if (i % 2 !== 0) {
//     console.log(i + " Is odd");
//   }
// }

// let student1={
//     fname: David,
//     marks:80

// };
// let student2={
//     fname: Vinoth,
//     marks:77

// };
// let student3={
//     fname: Divya,
//     marks:88

// };
// let student4={
//     fname: Ishitha,
//     marks:95

// };
// let student5={
//     fname: Thomas,
//     marks:68

// };

// function temp() {
//   const students = [
//     { fname: "David", marks: 80 },
//     { fname: "Vinoth", marks: 77 },
//     { fname: "Divya", marks: 88 },
//     { fname: "Ishitha", marks: 95 },
//     { fname: "Thomas", marks: 68 },
//   ];

//   let totalMarks = 0;

//   for (let i = 0; i < students.length; i++) {
//     totalMarks += students[i].marks;
//   }

//   let avgMarks = totalMarks / students.length;

//   let grade;
//   if (avgMarks < 60) {
//     grade = "F";
//   } else if (avgMarks < 70) {
//     grade = "D";
//   } else if (avgMarks < 80) {
//     grade = "C";
//   } else if (avgMarks < 90) {
//     grade = "B";
//   } else {
//     grade = "A";
//   }

//   console.log(`avgMarks: ${avgMarks.toFixed(2)}`);
//   console.log(`Grade: ${grade}`);
// }

// temp();

// function computeAverageMarksAndGrade() {
//   // Define the student marks
//   const students = [
//     { name: "David", marks: 80 },
//     { name: "Vinoth", marks: 77 },
//     { name: "Divya", marks: 88 },
//     { name: "Ishitha", marks: 95 },
//     { name: "Thomas", marks: 68 },
//   ];

//   // Calculate the average marks
//   let totalMarks = 0;
//   for (let i = 0; i < students.length; i++) {
//     totalMarks += students[i].marks;
//   }
//   const averageMarks = totalMarks / students.length;

//   // Determine the grade based on the average marks
//   let grade;
//   if (averageMarks < 60) {
//     grade = "F";
//   } else if (averageMarks < 70) {
//     grade = "D";
//   } else if (averageMarks < 80) {
//     grade = "C";
//   } else if (averageMarks < 90) {
//     grade = "B";
//   } else {
//     grade = "A";
//   }

//   // Output the average marks and grade
//   console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
//   console.log(`Grade: ${grade}`);
// }

// // Call the function to compute and display the average marks and grade
// computeAverageMarksAndGrade();

// let x = prompt("Enter your full name: ");
// let username = "@" + x + x.length;
// console.log(username);

// let students = [85, 97, 44, 37, 76, 60];
// let tot = 0;
// for (let i = 0; i < students.length; i++) {
//   tot += students[i];
// }
// console.log(tot);
// let avg = tot / students.length;
// console.log(avg);

// let items = [250, 645, 300, 900, 50];
// for (let i of items) {
//   items = i - i * 0.1;
//   console.log(`value after offer : ${items}`);
// }

// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of items) {
//   let offer = val / 10;
//   items[i] = items[i] - offer;
//   console.log(`value after offer = ${items[i]}`);
//   i++;
// }

// let items = [250, 645, 300, 900, 50];
// for (let i = 0; i < items.length; i++) {
//   let offer = items[i] * 0.1;
//   items[i] = items[i] - offer;
// }

// console.log(items);

// let company = ["bluebird", "microsoft", "uber", "google", "netflix"];
// console.log(company.unshift("Amazon"));

// let arrowmul = (a, b) => {
//   console.log(a * b);
// };

// let count = 0;
// function vow(x) {
//   for (let i = 0; i < x.length; i++) {
//     console.log(x[i]);
//     if (x[i] == "a") {
//       count = count++;
//     } else if (x[i] == "e") {
//       count++;
//     } else if (x[i] == "i") {
//       count++;
//     } else if (x[i] == "o") {
//       count++;
//     } else if (x[i] == "u") {
//       count++;
//     }
//   }

//   console.log(`count: ${count}`);
// }

// let vaer = (x) => {
//   for (let i = 0; i < x.length; i++) {
//     console.log(x[i]);
//     if (x[i] == "a") {
//       count = count++;
//     } else if (x[i] == "e") {
//       count++;
//     } else if (x[i] == "i") {
//       count++;
//     } else if (x[i] == "o") {
//       count++;
//     } else if (x[i] == "u") {
//       count++;
//     }
//   }

//   console.log(`count: ${count}`);
// };

//Template literals= Can embed expressions inside sring=using backtics and ${variable name}
// const fname = "Rahul";
// const age = 23;
// console.log(`I am ${fname} and I'm ${age} years old`);

// let age = 19;

// if (age >= 18) {
//   console.log("Can drive");
// } else {
//   let years = 18 - age;
//   console.log(`Can't drive . Can drive after ${years} years`);
// }

// let birthYear = 2015;
// // let century;
// if (birthYear > 2000) {
//   century = "21st";
// } else {
//   century = "20th";
// }

// console.log(century);

// let rahulBMI = 27.8;
// let vishalBMI = 26;
// if (rahulBMI > vishalBMI) {
//   console.log(
//     `Rahul's BMI ${rahulBMI} is greater than Vishal's  BMI ${vishalBMI}`
//   );
// } else {
//   console.log(
//     ` Vishal's  BMI ${vishalBMI} is greater than Rahul's BMI ${rahulBMI} `
//   );
// }

// let isMember = 0; //0:non-member,1:member
// let purchaseAmount = 170;
// //membership status
// if (isMember == 1) {
//   //purchase>=100
//   if (purchaseAmount >= 100) {
//     console.log(`Discount: ${purchaseAmount * 0.1}`);
//   } else {
//     console.log(`Discount: 0`);
//   }
// } else {
//   if (purchaseAmount >= 150) {
//     console.log(`Discount: ${purchaseAmount * 0.05}`);
//   } else {
//     console.log(`Discount: 0`);
//   }
// }

//Type Conversion and Type Coercion
// Type Conversion = Done by us from one data type to another
// const inputYear="1996";
// console.log(typeof inputYear);
// console.log(inputYear);

// console.log(Number(inputYear));
// console.log(Number("Rahul"));// NaN: Not a Number- It is a number but is a invalid number
// console.log(typeof Nan);
// console.log(String(1234), 1234);

// //Coercion- Type conversion done by javascript
// console.log("I am" + 23 + " years old.");
// console.log("23" - "10" -3);
// console.log("23"/ "2");

//Falsy values- which gives 0 when converted to boolean
// console.log(0, Boolean(0));
// console.log("", Boolean(""));
// console.log(undefined, Boolean(undefined));
// console.log(null, Boolean(null));
// console.log(NaN, Boolean(NaN));

// let money;
// if (money) {
//   console.log("Don't spend");
// } else {
//   console.log("Earn more");
// }

// let height;
// if (height) {
//   console.log("Height defined");
// } else {
//   console.log("Undefined");
// }

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((val) => {
//   console.log(val ** 2);
// });

// let marks = [34, 67, 87, 78, 99, 93, 56, 86];

// let great = marks.filter((value) => {
//   return value > 90;
// });

// console.log(great);

// n = prompt("Enter a number");
// let array = [];
// for (let i = 1; i <= n; i++) {
//   array[i - 1] = i;
// }
// console.log(array);

// let sum = array.reduce((prev, current) => {
//   return prev + current;
// });
// console.log(sum);

// let product = array.reduce((prev, current) => {
//   return prev * current;
// });
// console.log(product);

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = "BYe BYe";
// console.dir(h2.innerText);

// let div = document.querySelectorAll(".box");
// console.log(div[0]);
// div[0].innerText = "Why are you lying";

// let div = document.querySelectorAll(".box");
// let idx = 1;
// for (let d of div) {
//   d.innerText = `Are u crazy${idx}`;
//   idx++;
// }

// let newbtn = document.createElement("button");
// newbtn.innerText = "Click Me!";
// newbtn.style.backgroundColor = "red";
// newbtn.style.color = "white";

// let body = document.querySelector("body");
// body.prepend(newbtn);

// let para = document.createElement("p");
// para.innerText = "You are a good boy!";
// para.style.color = "white";
// para.style.backgroundColor = "purple";
// para.style.padding = "10px";
// para.style.border = "2px solid black";

// let body = document.querySelector("body");
// body.append(para);

// let para = document.querySelector("p");
// console.dir(para);
// para.getAttribute("class");
// // para.setAttribute("class", "newClass");

// console.log(para.classList);
// para.classList.add("newClass");

// let button = document.querySelector("#btn");
// button.addEventListener("click", (e) => {
//   console.log("You clicked me hero");
// });

// button.onclick = () => {
//   console.log("You clicked me");
//   let a = 25;
//   a++;
//   console.log(a);
// };

// let box3 = document.querySelector(".box3");
// box3.onmouseover = () => {
//   console.log("Welcome");
// };

// let mdbn = document.querySelector("#mode");
// let mode = "light";

// mdbn.addEventListener("click", () => {
//   if (mode === "light") {
//     mode = "dark";
//     console.log(mode);
//     // document.querySelector("body").style.backgroundColor = "black";
//     document.querySelector("body").classList.add("dark");
//     document.querySelector("body").classList.remove("light");
//   } else {
//     mode = "light";
//     console.log(mode);
//     // document.querySelector("body").style.backgroundColor = "white";
//     document.querySelector("body").classList.add("light");
//     document.querySelector("body").classList.remove("dark");
//   }
// });

// let power = document.querySelector(".power");

// let bgColor = "purple";
// power.addEventListener("mouseover", () => {
//   if (bgColor === "purple") {
//     bgColor = "orange";
//     console.log(bgColor);
//     power.classList.add("oran");
//     power.classList.remove("purp");
//   } else {
//     bgColor = "purple";
//     console.log(bgColor);
//     power.classList.add("purp");
//     power.classList.remove("oran");
//   }
// });

//Diff between == and ===
//Both are compaison operators but == convert data types into same data type and check value and return true if value is same but === checks data type and value both without converting data types and return false if data types are not same

// let x = "18";

// if (x === 18) {
//   console.log("Wrong");
// }

// if (x == 18) {
//   console.log("True");
// }

// Boolean Logic

// const hasLicence = true;
// const hasVision = true;

// console.log(hasLicence && hasVision);
// console.log(hasLicence || hasVision);
// console.log(!hasLicence);

// const isTired = true;
// if (hasLicence && hasVision && !isTired) {
//   console.log("Drive");
// } else {
//   console.log("Don't Drive");
// }

// let teamAScore1 = 96;
// let teamAScore2 = 108;
// let teamAScore3 = 89;
// let teamBScore1 = 88;
// let teamBScore2 = 91;
// let teamBScore3 = 110;
// let totScoreA = teamAScore1 + teamAScore2 + teamAScore3;
// let totScoreB = teamBScore1 + teamBScore2 + teamBScore3;

// let avgTeamA = totScoreA / 3;
// let avgTamB = totScoreB / 3;
// console.log(avgTeamA);
// console.log(avgTamB);

// let avgTeamA = 97.666;
// let avgTeamB = 96.333;

// if (avgTeamA > avgTeamB) {
//   console.log("Team A wins");
// } else {
//   console.log("Team B Wins");
// }

// let teamAScore1 = 97;
// let teamAScore2 = 112;
// let teamAScore3 = 101;
// let teamBScore1 = 109;
// let teamBScore2 = 95;
// let teamBScore3 = 123;
// let totScoreA = teamAScore1 + teamAScore2 + teamAScore3;
// let totScoreB = teamBScore1 + teamBScore2 + teamBScore3;

// console.log(totScoreA);
// console.log(totScoreB);

// if (totScoreA > 100 && totScoreB > 100) {
//   if (totScoreA > totScoreB) {
//     console.log("Congratulations, Team A wins");
//   } else if (totScoreA < totScoreB) {
//     console.log("Congratulations, Team B wins");
//   } else {
//     console.log("Congratulations,  Both Team wins");
//   }
// } else if (totScoreA > 100 && totScoreB < 100) {
//   console.log("Congratulations, Team A wins");
// } else if (totScoreB > 100 && totScoreA < 100) {
//   console.log("Congratulations, Team B wins");
// } else {
//   console.log("Sorry, Both teams loose , you all need to work hard");
// }

//Switch Case Statement

// let day = 2;
// switch (day) {
//   case 1:
//     console.log("Go to coaching");
//     break;

//   case 2:
//     console.log("Prepare notes");
//     break;

//   case 3:
//   case 4:
//     console.log("Do practice");

//   case 5:
//     console.log("Give exam");

//   case 6:
//   case 7:
//     console.log("Enjoy weekend");
//     break;

//   default:
//     console.log("Not valid");
// }

// if (day == 1) {
//   console.log("Monday");
// } else if (day == 2) {
//   console.log("Tuesday");
// } else if (day == 3) {
//   console.log("Wednesday");
// } else if (day == 4) {
//   console.log("Thursday");
// } else if (day == 5) {
//   console.log("Friday");
// } else if (day == 6) {
//   console.log("Saturday");
// } else if (day == 7) {
//   console.log("Sunday");
// } else {
//   console.log("Enter valid number");
// }

// let data = "secret magical powers";
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   viewData() {
//     console.log("You can view the data here", data);
//   }
// }
// let obj = new User("Gaurav", "gaurav123@gmail.com");

// class Admin extends User {
//   constructor(name, email) {
//     super(name, email);
//   }
//   editData() {
//     data = "some new data";
//   }
// }

// let admin = new Admin("adm", "adm@gmail.com");

// let bill = 350;
// let tip = bill >= 50 && bill <= 300 ? "0.15 " : "0.2";
// tottip = bill * Number(tip);
// console.log(tottip);
// amount = tottip + bill;
// console.log(
//   `The bill was ${bill}, tip was ${tottip} and final amount was ${amount}`
// );

// let totScoreA = 44 + 23 + 71;
// let totScoreB = 65 + 54 + 49;
// let totC = 85 + 54 + 41;
// let totD = 23 + 34 + 27;
// let calcAverage = (totScore) => {
//   let avg = totScore / 3;
//   return avg;
// };

// let averageA = calcAverage(totScoreA);
// let averageB = calcAverage(totScoreB);
// let averageC = calcAverage(totC);
// let averageD = calcAverage(totD);

// console.log(averageA);
// console.log(averageB);
// console.log(averageC);
// console.log(averageD);

// let checkWinner = (averageA, averageB) => {
//   if (averageA >= 2 * averageB) {
//     console.log(`averageTeamA wins(${averageA} vs ${averageB})`);
//   } else if (averageB >= 2 * averageA) {
//     console.log(`averageTeamB wins(${averageB} vs ${averageA})`);
//   } else {
//     console.log(`No one wins as no team has double score of other team`);
//   }
// };

// checkWinner(averageA, averageB);
// checkWinner(averageC, averageD);

// let bills = [125, 555, 44];

// let calcTip = (bill) => {
//   let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// };
// let tip1 = calcTip(bills[0]);
// let tip2 = calcTip(bills[1]);
// let tip3 = calcTip(bills[2]);

// console.log(tip1, tip2, tip3);

// let tips = [tip1, tip2, tip3];

// let tot = [tip1 + bills[0], tip2 + bills[1], tip3 + bills[2]];
// console.log(tot);

//Objects in JavaScript
// const rahulObject = {
//   firstName: "Rahul",
//   lastName: "Sharma",
//   age: 26,
//   job: "Developer",
//   friends: ["Manav", "Rohan", "Ajay"],
// };

// // Dot notaion vs Bracket Notation
// console.log(rahulObject.age);
// console.log(rahulObject.job);
// const nameKey = "Name";
// console.log(rahulObject["first" + nameKey]);
// console.log(rahulObject["last" + nameKey]);

// const interestedIn = prompt("What do you wanna know about rahulObject");

// if (rahulObject[interestedIn]) {
//   console.log(rahulObject[interestedIn]);
// } else {
//   console.log("Wrong request");
// }

// const rahulObject = {
//   firstName: "Rahul",
//   lastName: "Sharma",
//   birthYear: 1997,
//   job: "teacher",
//   friends: ["Manav", "Rohan", "Ajay"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     this.getSummary = `${this.firstName} is a ${this.calcAge()} years old ${
//       this.job
//     }, and he has ${this.hasDriversLicense? "a": "no"} driver's license`;
//     return this.getSummary;
//   },
// };

// console.log(rahulObject.getSummary());

// const rahulObject = {
//   fullName: "Rahul Sharma",
//   weight: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.weight / this.height ** 2;
//     return this.BMI;
//   },
// };

// const vishalObject = {
//   fullName: "Vishal Sharma",
//   weight: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.weight / this.height ** 2;
//     return this.BMI;
//   },
// };

// console.log(rahulObject.calcBMI());
// console.log(vishalObject.calcBMI());

// console.log(rahulObject.BMI);
// console.log(vishalObject.BMI);
// const higherBMI = () => {
//   if (rahulObject.BMI > vishalObject.BMI) {
//     console.log(
//       ` ${rahulObject.fullName} BMI  ${rahulObject.BMI} is higher than ${vishalObject.fullName}  BMI  ${vishalObject.BMI} `
//     );
//   } else {
//     console.log(
//       ` ${vishalObject.fullName} BMI  ${vishalObject.BMI} is higher than ${rahulObject.fullName}  BMI  ${rahulObject.BMI} `
//     );
//   }
// };

// higherBMI();

//Iteration The for loop
// 1. Initializaion /Declaration
// 2. Condition
// 3. Updation

// for (let i = 1; i <= 10; i++) {
//   console.log("Lifting weights repetition " + i);
// }
// let i =1;true;block;i++;
// i=2;true;block;i++;
// ......
// i=10;true;block;i++;
// i=11;false;exit for loop

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 * ${i} = ${5 * i}`);
// }

// for (let x = 1; x <= 10; x++) {
//   console.log(x * 2);
// }

// for (let x = 2; x <= 20; x = x + 2) {
//   console.log(x);
// }

// for (let x = 10; x >= 1; x--) {
//   console.log(x);
// }

// const rahulArray = [
//   "Rahul",
//   "Sharma",
//   2024 - 1998,
//   "Developer",
//   ["Mohit", "Vishal", "Harsh"],
//   true,
// ];

// const duplicateArr = [];
// const types = [];

// for (let i = 0; i <= rahulArray.length - 1; i++) {
//   console.log(rahulArray[i]);
//   duplicateArr[i] = rahulArray[i];
//   // types[i] = typeof rahulArray[i]
//   types.push(typeof rahulArray[i]);
// }
// console.log(duplicateArr);
// console.log(types);

// const years = [1991, 1976, 2000, 2005, 2008];
// const ages = [];
// for (let i = 0; i <= years.length - 1; i++) {
//   ages[i] = 2024 - years[i];
// }
// console.log(ages);

// const rahulArray = [
//   "Rahul",
//   "Sharma",
//   2024 - 1998,
//   "Developer",
//   ["Mohit", "Vishal", "Harsh"],
//   true,
// ];

// for (let i = 0; i < rahulArray.length; i++) {
//   if (typeof rahulArray[i] != "string") continue;
//   console.log(rahulArray[i]);
// }

// for (let i = 0; i < rahulArray.length; i++) {
//   if (typeof rahulArray[i] == "number") break;
//   console.log(rahulArray[i]);
// }

//Nested For loop
// for (let exercise = 1; exercise <= 5; exercise++) {
//   console.log(`----------Starting Exercise ${exercise}`);

//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Exercise ${exercise}: repetition ${rep}`);
//   }
// }

// let dice = Math.trunc(Math.random() * 6 + 1);

// while (dice != 6) {
//   console.log(dice);
//   dice = Math.trunc(Math.random() * 6 + 1);
//   if (dice == 6) console.log("You got 6");
// }
