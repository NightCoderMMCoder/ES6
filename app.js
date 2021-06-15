var name = "Aung Myat Oo";
var programmer = true; // global
let message;

if (programmer) {
  message = name + " is a programmer"; // block scope
}
console.log(message);

const timer = 5;
