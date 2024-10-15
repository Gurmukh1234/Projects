"use strict";

//* Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance-value");
const labelSumIn = document.querySelector(".summary-value-in");
const labelSumOut = document.querySelector(".summary-value-out");
const labelSumInterest = document.querySelector(".summary-value-interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login-btn");
const btnTransfer = document.querySelector(".form-btn-transfer");
const btnLoan = document.querySelector(".form-btn-loan");
const btnClose = document.querySelector(".form-btn-close");
const btnSort = document.querySelector(".btn-sort");

const inputLoginUsername = document.querySelector(".login-input-user");
const inputLoginPin = document.querySelector(".login-input-pin");
const inputTransferTo = document.querySelector(".form-input-to");
const inputTransferAmount = document.querySelector(".form-input-amount");
const inputLoanAmount = document.querySelector(".form-input-loan-amount");
const inputCloseUsername = document.querySelector(".form-input-user");
const inputClosePin = document.querySelector(".form-input-pin");

//* DATA
const account1 = {
  owner: "Rahul Kumar",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300, 100],
  interestRate: 7,
  pin: 1111,
};

const account2 = {
  owner: "Vicky Singh",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 6,
  pin: 2222,
};

const account3 = {
  owner: "Mohit Sharma",
  movements: [200, -200, 340, -20, 50, 400, -460],
  interestRate: 6.7,
  pin: 3333,
};

const account4 = {
  owner: "Raj Verma",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 8,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//App Logic

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  account1.movements.forEach(function (mov, i) {
    let type = mov > 0 ? "deposit" : "withdraw";
    let html = `
  <div class="movements-row">
  <div class="movements-type movements-type-${type}">${i + 1} ${type}</div>
  <div class="movements-date">3days ago</div>
  <div class="movements-value">${mov}</div>
  </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300, 100];

//Map Method
let nums = [3, 1, 4, 3, 2];

let sum = nums.map((num) => num * 2);

console.log(sum);

let usdToInr = 84.14;
let movementsInr = movements.map((mov) => mov * usdToInr);

console.log(movementsInr);

let movDesc = movements.map((mov, i) => {
  return `${i + 1}. ${mov > 0 ? `Deposit` : `Withdrawal`} - ${Math.abs(
    mov
  )} USD`;
});

console.log(movDesc);

//Filter

let deposits = movements.filter((mov, i) => {
  return mov > 0;
});

console.log(deposits);

let withdrawals = movements.filter((mov, i) => {
  return mov < 0;
});

console.log(withdrawals);
// //* Simple array methods
// let arr = ["a", "b", "c", "d", "e"];

// // Slice
// console.log("===SLICE===");

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // Splice
// console.log("===SPLICE===");
// // console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr.splice(1, 2));
// console.log(arr);

// // Reverse
// arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "i", "h", "g", "f"];

// console.log(arr2.reverse());
// console.log(arr2);

// // Concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // Join
// console.log(letters.join(", "));

//* The new at Method
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// //* Looping Arrays: forEach

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300, 100];

// // for (let mov of movements)

// for (let [i, mov] of movements.entries()) {
//   if (mov > 0) console.log(`Movement ${i + 1}: you deposited ${mov}`);
//   else console.log(`Movement ${i + 1}: you withdrew ${mov}`);
// }

// console.log("===FOREACH===");

// movements.forEach((element, index) => {
//   if (element > 0)
//     console.log(`Movement ${index + 1}: you deposited ${element}`);
//   else console.log(`Movement ${index + 1}: you withdrew ${element}`);
// });

// A function that accepts up to three arguments. forEach call the callbackfn function one time for each element in the array.
