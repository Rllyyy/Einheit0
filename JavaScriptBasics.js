//This file is just for testing JavaScript
//Last edited: 18.10.2020
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
const helloAnonymous = (name, age) => console.log(`Hello, ${name} you are ${age} years old!`);
helloAnonymous("Niklas", 17);
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
//-----------------------------------Strings--------------------------------------------------------//
/*
//Splitting a string into an array
const s = "technologies, computes, it, code, data";
//console.log(s.split(", "));
const a = s.split(", ");
const sBigger = a.forEach(word => console.log(word.toUpperCase()));
*/
//-----------------------------------Classes/Objects------------------------------------------------//
/*
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "football"],
  address: {
    street: "Hauptstraße 5",
    city: "Berlin",
    county: "Germany",
  }
}
person.email = "example@expl.com"
//console.log(`${person.firstName} ${person.lastName} (${person.age}) lives in ${person.address.city}.\n His e-mail is ${person.email}`); //get the city of the person
//console.log(person.hobbies[1]);

//Constructor function (old way ES5)
function Resident(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  }
}
//Instantiate object
const resident1 = new Resident("Niklas", "Fischer", "4-20-2020");
const resident2 = new Resident("Max", "Musterfrau", "5-3-2010");
//console.log(resident1);
//console.log(resident2.lastName);
//console.log(resident2.getBirthYear());

//Prototypes if a method or property should only be applied to one instance of the object
Resident.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}
console.log(resident1.getFullName());

//"Classes" (ES6)
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

  rename(newName) {
    this.name = newName;
  }

  //static methods can used without instantiating an object
  static Example() {
    return "This static method can only be used on the class character not on the object"
  }
}
const aurora = new Character("Aurora", 150, 25);
aurora.xp += 15;
aurora.rename("Petra");
console.log(aurora.describe());
console.log(Character.Example());
//console.log(aurora.describe());

//Subclass
class Hero extends Character {
  constructor(name, health, strength, sword) {
    super(name, health, strength);
    this.sword = sword;
  }

  //Override the method describe to also include a sword
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength and ${this.xp} XP points. He uses a ${this.sword}`;
  }
}

const hero1 = new Hero("Peter", 2000, 100, "Golden Sword");
hero1.rename("Peter2"); //Use the method from the parent on the extended class
console.log(hero1.describe());

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
    if (movie.director === "Christopher Nolan") {
      console.log(movie.title);
    }
  });
}

//Get all movies that have an higher or equal imdb rating of 7.5
const bestMovies = () => {
  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].imdbRating >= 7.5) {
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
    if (movie.director === "Christopher Nolan") {
      total += movie.imdbRating;
      moviesOfChristopher += 1;
    }
  });
  console.log(total / moviesOfChristopher);
}
*/

//---------------------------------Array Operations: map, filter, reduce and ---------------------------//
/*
const numbers = [1, 5, 6.15, 30, 8, 16, 7, 9, 20, 3, 2, 100, 40];
//Map-Method takes an array as a parameter and creates a new array with the results of calling a provided function on every element in this array. A typical use of map() is to replace a loop for array traversal.
//Double every element in the array
const doubles = numbers.map(x => x * 2);
console.log(doubles);               //returns double numbers as an array

//Filter-Method offers a way to test every element of an array against a provided function. Only elements that pass this test are added to the returned array.
//Get numbers that are even
const even = numbers.filter(x => x % 2 === 0);
console.log(even);                  //prints numbers as an array
//even.forEach(i => console.log(i));  //prints every element of the array

//Combine filter() and map()
const evenDouble = numbers.filter(x => x % 2 === 0).map(x => x * 2);
console.log(evenDouble);

//Reduce-Method applies a provided function to each array element in order to reduce it to one value.
//It takes two parameters: the first is an accumulator which contains the accumulated value previously returned by the last invocation of the function.
//The other function parameter is the array element.
//The last parameter is the initial value of the accumulator (often 0)
const sum = numbers.reduce((acc, value) => acc + value, 0);
console.log(`The combined sum is: ${sum}`);

const students = [
  {
    name: "Anna", gender: "f", grades: [4.5, 3.5, 4], startYear: 2017
  },
  {
    name: "Dennis", gender: "m", country: "Germany", grades: [5, 1.5, 4], startYear: 2012
  },
  {
    name: "Martha", gender: "f", grades: [5, 4, 2.5, 3], startYear: 2009
  },
  {
    name: "Brock", gender: "m", grades: [4, 3, 2], startYear: 2011
  }
];

//get all objects that have the gender f
const femaleStudents = students.filter(obj => {
  return obj.gender === "f";
});

const femaleStudentsShorter = students.filter(student => student.gender === "f")
femaleStudentsShorter.forEach((f, index) => console.log(`${index}: ${f.name}`));
//console.log(femaleStudentsShorter.name);


//Sort an array
const arraySorted = numbers.sort((a, b) => a - b);
console.log(arraySorted);

//Sort students by starting year with ternary operators (? = true; : = else)
const studentsSortedByStartingYear = students.sort((a, b) => (a.startYear > b.startYear ? 1 : -1));
console.log(studentsSortedByStartingYear);
*/
//-----------------------------------DOM----------------------------------------------//
/*
//not working because there is no html document
//Selecting Elements
//print text with textContent, innerHTML, innerText,
//Selecting Elements by tag name
const titleElements = document.getElementsByTagName("h1");
console.log(titleElements[0].textContent); //select the first element in the array
console.log(titleElements.length); //count how many items are in the array of title elements

//Selecting Items According to Class
const existingElements = Array.from(document.getElementsByClassName("Tabelle")); // Show all elements that have the class "exists"
existingElements.forEach(element => {
  console.log(element.textContent);
});

//Selecting an Item According to its ID
console.log(document.getElementById("table").innerText);

//Combine id and classes
console.log(document.getElementById("table").getElementsByClassName("selector").length);

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
*/
//-------------------Obtaining Information about Elements ------------------------//
/*
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
const classes = document.getElementById("table").classList;
console.log(classes.length); // 1 (since the element only has one class)
console.log(classes[0]);     // "wonders"
//Check whether "table" element contains the "wonders" class
console.log(document.getElementById("table").classList.contains("test"));
*/
//---------------------------- Convert an array to JSON ----------------------------------------//
/*
const todos = [
  {
    id: 1,
    text: "Clean the kitchen",
    isCompleted: true
  },
  {
    id: 2,
    text: "Take out te trash",
    isCompleted: true
  },
  {
    id: 3,
    text: "Drive to dentist",
    isCompleted: false
  }
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//convert back to js object
console.log(JSON.parse(todoJSON));
*/

//---------------------------------Modifying page structure: Modify an existing element------------------------//
document.querySelector(".container").innerHTML +='<div>This container was added by js</div>'
//XSS vulnerability which allows the execution of client side javascript
//document.querySelector(".container").innerHTML +="<script>" + alert("Hello"); + "</script>"
document.querySelector(".container").innerHTML +="<script>" + console.log("XSS vulnerability detected"); + "</script>"

//Attributes. Select the first h3 element and set the id attribute to title
document.querySelector("h3").setAttribute("id","title");
document.querySelector("h1").id = "Heading";

//Remove the className container1 from the div and add the ClassName UserMessage
const titleElement = document.querySelector(".container1");
titleElement.classList.remove("container1");
titleElement.classList.add("UserMessage");
console.log(titleElement);

//---------------------------------Modifying page structure: Adding a new Element--------------------------------//
const ULByJS = document.createElement("li");
ULByJS.textContent = "linear gradients (This was added by js)";
ULByJS.id = "js";
document.querySelector("#cssList").appendChild(ULByJS);

//---------------------------------Variations on Adding elements--------------------------------------------------//
//Adding a Textual Node (createTextNode) instead of changing the textContent property (like above)
const rubyElement = document.createElement("li");
rubyElement.appendChild(document.createTextNode("Ruby"));
document.getElementById("cssList").appendChild(rubyElement);
//remove the element of a list
const list = document.getElementById("cssList");
const listItems = list.getElementsByTagName("li");
let lastItem = listItems[listItems.length-1];
list.removeChild(lastItem);
//or rubyElement.remove()

//Adding a Node Before another one
const itemInBetween = document.createElement("li");
itemInBetween.id = "itemInBetween";
itemInBetween.appendChild(document.createTextNode("This item was but into the list by JavaScript"));
document.querySelector("#cssList").insertBefore(itemInBetween, document.querySelector("#height"));
//itemInBetween.remove(); //remove the item, not needed because it's later replaced in "Replacing or Removing nodes"

//Determining the Exact Position of the New Node
//beforebegin: before the existing element
//afterbegin: inside the existing element, before its first child
//beforeend: inside the existing element, after its last child
//afterend: after the existing element
let insertedHTML = document.querySelector("#cssList").insertAdjacentHTML("afterBegin", '<li id="javascript">This HTML was added by JS</li>');
document.querySelector("#javascript").remove(); //remove it

//Adding text with a link
const paragraphElement = document.createElement("p");
const linkElement = document.createElement("a");
linkElement.id = "linkToAllLanguages";
linkElement.href = "https://en.wikipedia.org/wiki/List_of_programming_languages";
linkElement.text = "list";
paragraphElement.appendChild(document.createTextNode("Here is a more complete "));
paragraphElement.appendChild(linkElement);
paragraphElement.appendChild(document.createTextNode(" of languages."));
document.querySelector("#contentList").appendChild(paragraphElement);

//-----------------------------------------Replacing or Removing nodes-------------------------------------------------------//
//Replacing a Node
const textAlign = document.createElement("li");
textAlign.id = "textAlign";
textAlign.appendChild(document.createTextNode("text-align (replaced by js)"));
document.querySelector("#cssList").replaceChild(textAlign, document.getElementById("itemInBetween"));

//Removing a Node
//document.querySelector("#cssList").removeChild(document.querySelector("#textAlign"));

//----------------------------------------Styling Elements-------------------------------------------------------------------//
const forms = document.querySelector("#forms");
forms.style.color = "grey";
forms.style.textDecoration = "underline";

//Access Element Styles
console.log(getComputedStyle(forms).color);

//-----------------------------------------The Event Family------------------------------------------------------------------//
document.querySelector("#myButton").addEventListener("click", e => {
  console.log(`Event type: ${e.type}, target: ${e.target}, time: ${e.timeStamp}`);
});

//------------------------------------------Reacting to Keyboard Events (keydown, keypress and keyup)------------------------//
//Show the pressed character
document.addEventListener("keypress", e => {
  //console.log(`You pressed the ${e.key} key`);
});

//Show information on a keyboard event
const keyboardInfo = e => {
  console.log(`Keyboard event: ${e.type}, key: ${e.key}`);
};
document.addEventListener("keydown", keyboardInfo);
document.addEventListener("keyup", keyboardInfo);

//Keypress task to switch background color
let allDivs = document.querySelectorAll("div");
let backgroundColor = "white";
document.addEventListener("keypress", e => {
    let key = e.key;
    key = key.toLowerCase();
    switch (key) {
        case "r":
            test("red");
            break;
        case "y":
            test("yellow");
            break;
        case "g":
            test("green");
            break;
        case "b":
            test("blue");
            break;
        default:
            console.log("This key can't change the backgroud color");
    }
});

const test = (backgroundColor) => allDivs.forEach(div => {
    div.style.backgroundColor = backgroundColor;
});

//--------------------------------------------Reacting to Mouse Events------------------------------------------------------//
const mouseInfo = e => {
  //console.log(`Mouse event: ${e.type}, button: ${getMouseButton(e.button)}, X (client): ${e.clientX}, Y (client): ${e.clientY}, X (page): ${e.pageX}, Y (page) ${e.pageY}`);
};
const getMouseButton = function (MouseButton) {
  let button = "";
  switch (MouseButton) {
    case 0:
      button = "left";
      break;
    case 1:
      button = "middle";
      break;
    case 2:
      button = "right";
      break;
  }
  console.log(button);
  return button;
};
document.addEventListener("click", mouseInfo);

//Mousedown and mouseup can be used the same as keydown and keyup
document.addEventListener("mousedown", e => {
  //console.log("mouse went down");
});

//-----------------------------------------------Reacting to Page Events-----------------------------------------------------//
//Page Loading
window.addEventListener("load", e =>{
  console.log("The page has been loaded!");
});

//Page Closing
//window.addEventListener("beforeunload", e => {
  //const message = "Should you stay or should you go?";
  //e.returnValue = message;
  //return message;
//});

//-----------------------------------------------Cancelling the Default Behavior of an Action---------------------------------//
document.querySelector("#myButton").addEventListener("click", e => {
  //alert("Yes... But no.")
  e.preventDefault();
});

//-----------------------------------------------Remove the eventListener-----------------------------------------------------//
let countClick = 0;
//Anonymous fat arrow function
const addCount = () =>{
    countClick = countClick + 1;
    updateCountClick();
}
function updateCountClick(){
    document.querySelector("#clickCount").innerText = countClick;
}
document.querySelector("#myButton").addEventListener("click", addCount);

document.querySelector("#deactivate").addEventListener("click", () => {
    document.querySelector("#myButton").removeEventListener("click", addCount);
});

//------------------------------------------------Repeat an Action at Regular Intervals-------------------------------//
//runs the code/functions in intervals, with the length of the timeout between them
//const intervalId = setInterval(callbackFunction, timeBetweenEachCall);
//runs the code/function once after the timeout
//const timeout = setTimeout(alert, timeout);

//------------------------------------------------Animation with JavaScript-------------------------------------------//
const blockElement = document.querySelector("#block");
const blockWidth = parseFloat(getComputedStyle(blockElement).width);
let movement = 7;
const moveBlock = () => {
  //convert the left position of the block to a number
  const xBlock = parseFloat(getComputedStyle(blockElement).left);
  // Convert the width of the frame (value of the form "XXpx") to a number
  const xMax = parseFloat(getComputedStyle(frame).width);
  if (xBlock + blockWidth <= xMax) {
    // Block movement
    blockElement.style.left = (xBlock + movement) + "px";
    animationId = requestAnimationFrame(moveBlock);
  }
  else {
    // Cancel the animation
    cancelAnimationFrame(animationId);
  }

};
//Chronometer (the one that counts up)
const button = document.querySelector("#start");
let counter = document.querySelector("#counter");
let intervalId = null;
let started = false;
button.addEventListener("click", () => {
    if (!started){
        intervalId = setInterval(() => {
            counter.textContent = String(Number(counter.textContent) + 1);
        }, 1000);
        button.textContent = "Stop";
    } else {
        clearInterval(intervalId);
        button.textContent = "Start";
    }
    started = !started;
});


let animationId = requestAnimationFrame(moveBlock);

//------------------------------------------The right animation technique------------------------//
/*
Guide:
  - Use setInterval() if the animation isn’t in real-time and should just happen at regular intervals.
  - Favor CSS if the animation happens in real-time and can be managed with it.
  - Use requestAnimationFrame() for any other case.
*/
//------------------------------------------Promises---------------------------------------------//
/*A promise is in one of these states:
  - pending: initial state, not fulfilled or rejected
  - fulfilled: meaning that the operation completed successfully
  - rejected: meaning that the operation failed
*/
fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt")
  .then(response => response.text())
  .then(text => {console.log(text)});
//Dealing with Errors
/*
fetch("http://non-existent-resource")
  .catch(err => {
    console.error(err.message);
  });
*/
fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt")
  .then(response => response.text())
  .then(text => {
    let textArray = text.split(";");
    textArray.forEach(programmingLanguage => {
      const liElement = document.createElement("li");
      liElement.appendChild(document.createTextNode(programmingLanguage));
      //document.querySelector("#fetch").appendChild(liElement);
    });
  })
  .catch(err => {
    console.error(err.message);
  });
//Dealing with JSON



















