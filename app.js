var name = `Aung Myat Oo`;
var programmer = true; // global
let message;
let age = 30;

if (programmer) {
  message = `${name} is a programmer and ${age} years old`; // block scope
}
console.log(message);

const timer = 5;

function test() {
  console.log("function");
}
test();

const arrowFunction = (arrow, age) => console.log(`${arrow} function ${age}`);

arrowFunction("arrow", 20);

let firstName = "Aung Myat";
let lastName = "Oo";
const User = {
  firstName,
  lastName,
  fullName() {
    return `${User.firstName} ${User.lastName}`;
  },
};
// Object Literals
console.log(User.fullName());

console.log(User["firstName"]);

let work = "programmer";
User[work] = true;
console.log(User);

let mgmgAge = age; // primitive Data type
age = 40;
console.log(mgmgAge);

let UserOne = { ...User };
console.log(UserOne);

let UserTwo = {
  ...User,
  work: ["web developer", "android developer"],
};
console.log(UserTwo);

let fruit = ["apple", "orange"];
let testing = ["aung myat oo", "myo thant kyaw"];

console.log([...fruit, ...testing]);

// Rest Parameter
function restParameter(name, age, ...nums) {
  console.log(name, age);
  let total = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   total += nums[i];
  // }
  for (idx in nums) {
    total += nums[idx];
  }
  console.log(total);
}
restParameter("Mg Mg", "age", 1, 3, 5, 6);

const todos = [{ task: "Go Shopping" }, { task: "Buy Tickets" }];
console.log(todos);

// for (todo of todos) {
//   console.log(todo);
// }
todos.forEach((todo, idx) => {
  console.log(todo, idx);
});

let nums = [2, 3, 4, 6];
const newArray = nums.map((num) => num * 2);
console.log(newArray);

const total = nums.reduce((total, num) => total + num, 0);
console.log(total);

const ul = document.querySelector("ul");
const input = document.querySelector("input");
const fruits = ["Apple", "Orange", "Grape"];

// case sensitive
input.addEventListener("input", (e) => {
  ul.innerHTML = "";
  console.log(e.target.value);
  let newFruitsArray = fruits.filter((fruit) =>
    fruit.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  console.log(newFruitsArray);
  displayLists(newFruitsArray);
});

function displayLists(fruits) {
  fruits.forEach((fruit) => {
    ul.innerHTML += `<li>${fruit}</li>`;
  });
}
displayLists(fruits);
