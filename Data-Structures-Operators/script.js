"use strict";

// let weekdays = ["Sun", "Mon", "Tue","Wed", "Thu", "Fri", "Sat"];
// let openingHours: {
//   [weekdays[4]]: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0,
//     close: 24,
//   },
// },

const restaurant = {
  name: "Subway",
  location: "123 Main St",
  categories: ["Italian", "Indian", "Vegetarian", "Organic"],
  starterMenu: ["Fries", "Soup", "Salad"],
  mainMenu: ["Pizza", "Pasta", "Burger"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = "22:00",
    address,
    starterIndex = 1,
    mainIndex = 1,
  }) {
    console.log(
      `order received! ${this.staterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Order received! Pasta with ingredients: ${ing1}, ${ing2}, ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log("mainIngredient");
    console.log(otherIngredient);
  },
};

// //Destructuring Arrays
// const arr = [10, 20, 30];
// let a = arr[0];
// let b = arr[1];
// const c = arr[2];
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

//skip an element
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //Switching variables
// //let temp =main;
// // main=secondary;
// // secondary=main;

// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// //Recieve 2 return values from a function;
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested Destructuring
// const nested = [2, 4, [5, 6]];
// const [first, second, [third, fourth]] = nested;
// console.log(first, second, third, fourth);

// //default values
// const [p = 1, q = 1, r = 1] = [100, 200];
// console.log(p, q, r);

// //Destructuring Objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //custom variable names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// //Mutating Variables

// const a = 111;
// const b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// restaurant.orderDelivery({
//   time: "23:00",
//   address: "456 Elm St",
//   starterIndex: 3,
//   mainIndex: 2,
// });

//Spread Operator
// const arr = [7, 8, 9];
// const badArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badArr);

// const goodArr = [1, 2, ...arr];
// console.log(goodArr);
// console.log(7, 8, 9);

// const mainMenu = [...restaurant.mainMenu, "Garlic Bread"];
// console.log(mainMenu);

// //copy array
// const mainMenuArr = [...restaurant.mainMenu];

// //join 2 array
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //iterables = array,string,maps,set,not objects
// const str = "Vishal";
// const letters = [...str, " ", "S."];
// console.log(letters);
// console.log(str);

// //Real example
// const ingredients = [
//   prompt("Lets make pasta! ing1"),
//   prompt("ing2"),
//   prompt("ing3"),
// ];
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// const newRestaurant = { ...restaurant, name: "KFC", foundedIn: 1998 };
// console.log(newRestaurant);

// //Rest patternand Parameters;

// //Destructuring
// //Spread, because on Right side of =;
// const arr = [1, 2, ...[3, 4]];

// //Rest because on left side of =;
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, others);

// const [firstItem, secondItem, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(firstItem, secondItem, otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat);
// console.log(weekdays);

// //Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// };

// console.log(add(100, 250));
// console.log(add(100, 250, 350));
// console.log(add(100, 250, 300, 1000));

// const nums = [100, 250, 300, 1000];
// console.log(add(...nums));

// restaurant.orderPizza("mushrooms");

// restaurant.orderPizza("mushrooms", "onions", "olives");

// // Short Circuiting(&& and ||)
// //falsy- 0,undefined,"",null,NaN
// //Short Circuiting-Use any data type and return any data type
// // (||)return first truthy value,if no truthy +nt, then last falsy value
// console.log(10 || "hello"); //10
// console.log(0 || "hello"); //hello
// console.log(null || "hello"); //hello
// console.log(undefined || "hello"); //hello
// console.log(NaN || ""); //""

// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);
// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// // (&&) return first falsy value, if no falsy +nt, then last truthy value
// console.log(0 && "hello"); //0
// console.log(10 && "hello"); //hello
// console.log(null && "hello"); //null
// console.log(undefined && "hello"); //undefined
// console.log(NaN && ""); //NaN

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "onions", "olives");
// }

// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "onions", "olives");

// // Nullish Operator
// //falsy= undefined,null,NaN;
// // truthy- 0,""
// const guest3 = restaurant.numGuests ?? 10;
// console.log(guest3);

// //* Coding Questions

// Codding Challenge

// We're building a football betting app!
// Suppose we get data from a web service about a certain game ('game' variable). In this challenge we're gonna work with that data.

// Your tasks:
// 1. Create one player array for each team (variables 'players1' and 'players2') /

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players /
// 3. Create an array 'allPlayers' containing all players of both teams (22 players) /

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic' /

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2') /

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in) /

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
};

// // let players1 = game.players[0];
// // let players2 = game.players[1];
// let [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// let [goalKeeper, ...fieldPlayers] = players1;
// console.log(goalKeeper);
// console.log(fieldPlayers);

// let [goalKeeper2, ...fieldPlayers2] = players2;
// console.log(goalKeeper2);
// console.log(fieldPlayers2);

// let allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const substitutePlayers = ["Thiago", "Coutinho", "Perisic"];
// let players1Final = [...players1, ...substitutePlayers];
// console.log(players1Final);

// let { team1, draw, team2 } = game.odds;
// console.log(team1);
// console.log(draw);
// console.log(team2);

// let currPlayers = ["Davies", "Muller", "Lewandowski", "Kimmich"];

// let printGoals = function (...currPlayers) {
//   let sum = 0;
//   for (let i = 0; i < currPlayers.length; i++) {
//     console.log(`${currPlayers[i]} scored a goal`);
//     sum++;
//   }
//   console.log(`Total goals scored: ${sum}`);
// };

// // let printGoals2 = function (...Players) {
// //   console.log(Players)
// // console.log(`${Players.length} goals were scored.`);
// // }
// printGoals(...currPlayers);

// team1 < team2 && console.log("team1 is more likely to win");
// team2 < team1 && console.log("team2 is more likely to win");

//The for-of loop

// let menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (let val of menu) {
//   console.log(val);
// }

//entries method convert that element into an array with first element as index and 2nd as value
// let menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (let val of menu.entries()) {
//   console.log(`${val[0]} = ${val[1]}`);
// }

// for (let [i, val] of menu.entries()) {
//   console.log(`${i + 1} = ${val}`);
// }

//Optional Chaining

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// console.log(restaurant.openingHours.mon.open);

//With Optional Chaining

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// let days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (let day of days) {
//   let open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`on ${day}, we open at ${open}`);
// }

// //methods
// console.log(restaurant.order?.(0, 1)) ?? "Method not implemented";

//Loop over Objects
//Property Names

let properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;
for (let day of properties) {
  openStr += `\n${day}: ${restaurant.openingHours[day].open} - ${restaurant.openingHours[day].close}`;
}

console.log(openStr);

//Property Values

let values = Object.values(restaurant.openingHours);
console.log(values);

// let openStr2 = `We are open on ${values.length} days:`;
// for (let value of values) {
//   openStr2 += `${value.open} - ${value.close}`;
// }

// console.log(openStr2);

//Entire Object
// let entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (let [day, { open, close }] of entries) {
//   console.log(`on ${day}, we open at ${open} and close at ${close}`);
// }

// //sets
// let orderset = new Set(["Pasta", "Pizza", "Pizza", "Pizza", "Cheese"]);
// console.log(orderset);

// console.log(new Set("Naman"));

// console.log(orderset.size);
// console.log(orderset.has("Pasta"));
// console.log(orderset.has("Roti"));

// orderset.add("Parantha");
// orderset.delete("Pasta");
// console.log(orderset);

// orderset.clear();

// for (let el of orderset) {
//   console.log(el);
// }

// const staff = ["Waiter", "Manager", "Chef", "Manager"];
// let staffSet = new Set(staff);
// console.log(staffSet);

// let stafSet = [...new Set(staff)];
// console.log(stafSet);

// console.log(new Set(staff).size);

//Maps
// let rest = new Map();
// rest.set("name", "The Rusty Anchor");
// rest.set(1, "Noida");
// rest.set(2, "Ghaziabad");
// console.log(rest);

// rest
//   .set("categories", ["Italian", "Foreign", "Indian"])
//   .set("open", 11)
//   .set("close", 23);
// console.log(rest);
// rest.set(true, "We are open").set(false, "We are closed");
// console.log(rest);

// console.log(rest.get("categories"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// let time = 8;
// console.log(rest.get(time >= rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// console.log(rest.has("name"));
// // rest.delete(2);
// console.log(rest);
// // rest.clear();
// // console.log(rest);

// let arre = [1, 2];
// rest.set(arre, "Test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);

//Working with Strings
// let str = "Hello, World!";
// let str1 = "This is a javascript string!";
// console.log(str.length);
// console.log(str.charAt(0));
// console.log(str.charCodeAt(0));
// console.log(str.concat(" ", "Welcome"));
// console.log(str.slice(1, 5));
// console.log(str.substring(1, 5));
// console.log(str.indexOf("l"));
// console.log(str.lastIndexOf("l"));

let str3 = "XYZ Air India";
console.log(str3.startsWith("XYZ"));
console.log(str3.endsWith("XYZ"));
console.log(str3.includes("AI"));

console.log(str3.replace("XYZ", "Delta"));
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());

console.log(str3.split(" "));

let str4 = "Hello, World!";
console.log(str4.repeat(3));

let announcements = "All passangers have passed the test suite of the company";
console.log(announcements.replace(/the/g, "a"));

let name = "moHiT";
let nameLower = name.toLowerCase();
let correct = nameLower[0].toUpperCase() + nameLower.slice(1);
console.log(correct);

console.log("Rahul Sharma".split(" "));
let [firstName, lastName] = "Rahul Sharma".split(" ");
let newName = ["Mr", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

let message = "Go to gate 23";
console.log(message.padStart(20, "+").padEnd(30, "+"));
