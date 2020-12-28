//load the module 
const greetings = require("./greetings.js");

console.log(greetings.sayHello("Niklas"));
console.log(greetings.flatter());

//Load calculator module
const calculator = require("./calculatorObj.js");
 
//create a calculator object 
const calc = calculator();

//Use object methods
const a = 23;
const b = 46;
console.log(`${a}+${b} = ${calc.add(a,b)}`);

//Load user module
const User = require("./userClass");

//create an object
const user = new User("John", "Doe");

//use the object
console.log(user.describe());

const Account = require("./accounting.js");
const myAccount = new Account("Jeff");
myAccount.credit(150)
myAccount.describe();

