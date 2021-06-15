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
