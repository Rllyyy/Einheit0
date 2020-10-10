//This file is just for testing JavaScript
//Last edited: 10.10.2020
//Functioning programms are inbetween comments
//Functions can be activated by removing the comments

//All around functions //
/*
function sayHello() {
    return "Hello!";
  }
const HelloFunction = sayHello();
console.log(HelloFunction); 
//Alternative: console.log(sayHello());

// function expression
const hello = function(name) {
    const message = `Hello, ${name}!`;
    return message;
  };
  
console.log(hello('Niklas'));

//anonymous functions, fat arrow functions
//The return statement is omitted and implicit.
const helloAnonymous = (name, age) => {
    return message = `Hello, ${name} you are ${age} years old!`;
  };
console.log(helloAnonymous('Peter', 16))
//Alternative: const helloAnonymous = (name, age) => `Hello, ${name} you are ${age} years old!`;

//anonymous functions with only one parameter. Parentheses can be omitted
const helloSingle = name => `Hello, ${name}!`;
console.log(helloSingle("Kate")); 

*/


//Arrays: Iterating over an Array with for, for each and for-of loops ///
const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
//For loop
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

//For each loop. (Slower than for loop)
movies.forEach(movie => {
    console.log(movie);
});

//for-of
for(const movie of movies) {
    console.log(movie);
}
