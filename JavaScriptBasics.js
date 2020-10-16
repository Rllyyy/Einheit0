//This file is just for testing JavaScript
//Last edited: 10.10.2020
//Functioning programs are in between comments
//Functions can be activated by removing the comments

//----------------------------------All around functions ---------------------------------//
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


//------------------Iterating over an Array with for, for each and for-of loops ------------------------------//
/*
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
*/

//-------------------Updating an Array ------------------------------------------------------//
/*
const gamesList = ["Rocket League", "PES 2002", "FIFA 2005"];
gamesList.push("Dirt 3")  //Add a new item to the end of an array
gamesList.unshift("ABZÙ") //Add a new item to the begging of an array
gamesList.pop();          //Remove the last item of the end of an array
gamesList.splice(1,1);    //Go to the second element of the array and remove 1 element

gamesList.forEach(game => {
  console.log(game);
});
*/

//------------------------------------Iterating over a String--------------------------------//
/*
const name = "Sarah"; // 5 characters

console.log(name[0]);
console.log(name[1]); 
console.log(name[2]); 
console.log(name[3]); 
console.log(name[4]); 

//for loop
for (let i=0; i < name.length; i++)
{
  console.log(name[i]);
}

//for-of loop
for(const letter of name) {
  console.log(letter);
}


//Converting a string to an array and iterating of it
vowels("fly");
vowels("PeterPan");
function vowels(word){
  let i = 0;
  // Create an array from the string
  const wordArray = Array.from(word);

  wordArray.forEach(vowel => {

    if (vowel === "a" || vowel === "e"|| vowel === "i" || vowel === "u"|| vowel === "o") 
    {
        i++ ;
    }
  });
  console.log(i);
}

//Reverse a verb
console.log(reverse("fly"));

function reverse(word) {
  var reverseWord ="";	
  for(var i = word.length - 1; i >= 0; i--){
      reverseWord += word[i];
  }
  return reverseWord;
}
*/


//-----------------------------------Classes/Objects------------------------------------------------//
/*
class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; // XP is always zero for new characters
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength and ${this.xp} XP points`;
  }
}
const aurora = new Character("Aurora", 150, 25);
aurora.xp += 15;
console.log(aurora.describe()); 
*/

//----------------------------------Objects in an Array-------------------------------------------//
/*
const movieList = [
  {
    title: "Batman",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 7.6
  },
  {
    title: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 7.0
  },
  {
    title: "Batman Forever",
    year: 1995,
    director: "Joel Schumacher",
    imdbRating: 5.4
  },
  {
    title: "Batman & Robin",
    year: 1997,
    director: "Joel Schumacher",
    imdbRating: 3.7
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    imdbRating: 8.3
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    imdbRating: 9.0
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    imdbRating: 8.5
  }
];

//List all movies in the array
movieList.forEach(movie => console.log(movie.title));

//Get movies by Christopher Nolan
ChristoperNolanMovies();
function ChristoperNolanMovies() {
  movieList.forEach(movie => {
    if(movie.director==="Christopher Nolan") 
    {
      console.log(movie.title);
    }
  });
}

//Get all movies that have an higher or equal imdb rating of 7.5
const bestMovies = () => {
  for (let i = 0; i < movieList.length; i++) 
  {
    if(movieList[i].imdbRating >= 7.5)
    {
      console.log(movieList[i].title);
    };
  }
}
bestMovies();

//Average rating of Christopher Nolan movies
NolanAverage();
function NolanAverage() {
  let total = 0;
  let moviesOfChristopher = 0;
  movieList.forEach(movie => {
    if(movie.director==="Christopher Nolan") 
    {
      total += movie.imdbRating;
      moviesOfChristopher +=1;
    }
  });
  console.log(total/moviesOfChristopher);
}
*/

//---------------------------------Array Operations: map, filter and reduce ---------------------------//
/*
const numbers = [1,5,6.15,30,8,16];
//Map-Method takes an array as a parameter and creates a new array with the results of calling a provided function on every element in this array. A typical use of map() is to replace a loop for array traversal.
//Dobule every element in the array
const doubles = numbers.map(x => x * 2);
console.log(doubles);               //returns double numbers as an array

//Filter-Method offers a way to test every element of an array against a provided function. Only elements that pass this test are added to the returned array.
//Get numbers that are even
const even = numbers.filter(x => x%2 === 0);
console.log(even);                  //prints numbers as an array
//even.forEach(i => console.log(i));  //prints every element of the array

//Combine filter() and map()
const evenDouble = numbers.filter(x => x%2 === 0).map(x => x * 2);
console.log(evenDouble);

//Reduce-Method applies a provided function to each array element in order to reduce it to one value.
//It takes two parameters: the first is an accumulator which contains the accumulated value previously returned by the last invocation of the function. 
//The other function parameter is the array element. 
//The last parameter is the initial value of the accumulator (often 0)
const sum = numbers.reduce((acc, value) => acc + value,0);
console.log(sum);

const students = [
  {
    name: "Anna", gender: "f", grades: [4.5, 3.5, 4]
  },
  {
    name: "Dennis",gender: "m", country: "Germany", grades: [5, 1.5, 4]
  },
  {
    name: "Martha", sex: "f", grades: [5, 4, 2.5, 3]
  },
  {
    name: "Brock", gender: "m", grades: [4, 3, 2]
  }
];

//get all objects that have the gender f
const femaleStudents = students.filter(obj => {
  return obj.gender === "f";
});

console.log(femaleStudents);

const array = [7,9,20,3,2,100,40];

//Sort an array
let arraySorted= array.sort(function(a, b){return a-b});
console.log(arraySorted);
*/
//-----------------------------------DOM----------------------------------------------//
//not working because there is no html document
//Selecting Elements
//Selecting Elements by tag name
const titleElements = document.getElementsByTagName("h2");
console.log(titleElements[0].innerHTML); //select the first element in the array
console.log(titleElements.length); //count how many items are in the array of title elements

//Selecting Items According to Class
const existingElements = Array.from(document.getElementsByClassName("exists")); // Show all elements that have the class "exists"
existingElements.forEach(element => {
  console.log(element.innerHTML);
});

//Selecting an Item According to its ID
console.log(document.getElementById("new").innerHTML);

//Combine id and classes
console.log(document.getElementById("ancient").getElementsByClassName("exists").length);

//CSS Selectors
// All paragraphs
console.log(document.querySelectorAll("p").length); // 3
//print all text of all paragraphs
const p = Array.from(document.querySelectorAll("p"));
p.forEach(element => {
    console.log(element.innerHTML);
})
// All paragraphs inside the "content" ID block
console.log(document.querySelectorAll("#content p").length); // 2
// All elements with the "exists" class
console.log(document.querySelectorAll(".exists").length); // 8
// All "ancient" wonders that still exist
console.log(document.querySelectorAll("#ancient > .exists").length); // 1
//Only show the first paragraph
console.log(document.querySelector("p").innerHTML); //has no "All", so only the first item is returned

//-------------------Obtaining Information about Elements ------------------------//
//HTML-Content
console.log(document.getElementById("content").innerHTML);
//The textContent property returns all the text content of a DOM element, without any HTML markup.
console.log(document.getElementById("content").textContent);
//The getAttribute() method can be applied to a DOM element and will return the value of a given attribute.
console.log(document.querySelector("a").getAttribute("href"));
console.log(document.querySelector("a").href); //works with id, href, and value attributes.
//Check if the element has an attribute:
if (document.querySelector("a").hasAttribute("target")) {
  console.log("The first link has a target attribute.");
} else {
  console.log("The first link does not have a target attribute."); // Will be shown
}
//Classes: classList property retrieves a DOM element’s list of classes
const classes = document.getElementById("ancient").classList;
console.log(classes.length); // 1 (since the element only has one class)
console.log(classes[0]);     // "wonders"
//Check whether "ancient" element contains the "wonders" class
console.log(document.getElementById("ancient").classList.contains("wonders"));

