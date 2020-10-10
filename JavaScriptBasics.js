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
const hello= 3;
//----------------------------------Objects in an Array-------------------------------------------//
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

//---------------------------------Array Operations ---------------------------//


