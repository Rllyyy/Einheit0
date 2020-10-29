//Single Element selectors
const form = document.getElementById("my-form"); //get an element by the id
const container = document.querySelector(".container"); //selects the first element that is found (. for class, # for id's, tag [h1] work too)

//Multiple element selectors
const items = document.querySelectorAll(".item"); //node list; Array methods can be used on it
items.forEach(item => console.log(item.textContent)); //Console log each item 

console.log(document.getElementsByClassName("item")); //HTMLCollection, Array methods can not be used on it. Hss to be converted to an array
console.log(document.getElementsByTagName("h1")); //Also returns a HTMLCollection

//Manipulating DOM Elements
//remove items form the items class
const ul = document.querySelector(".items");
//ul.remove(); //remove the whole items class
ul.lastElementChild.remove(); //remove the last element of the child of the class
//Manipulating text
ul.firstElementChild.textContent = "This has been added by JavaScript"; //Edit the first element of the class
ul.children[1].innerText = "hello"; //inner text will not return the text of hidden elements
ul.lastElementChild.innerHTML = "<h2>This text was made into an h1 by js </h2>";


const btn = document.querySelector(".btn");
btn.addEventListener("click", function(e) {
    //prevent the site from refreshing because of the submit element
    e.preventDefault();

    const nameText = document.querySelector("#name");
    const emailText = document.querySelector("#email");
    
    const msg = document.querySelector(".msg");
    if(nameText.value === "") {
        nameText.style.background = "#DC143C";
        //add css to the html
        msg.classList.add("error");
        //add text to the empty html element
        msg.innerHTML = "Please enter all fields";
        setTimeout(()=> {nameText.style.background = "white";},3000);
    } 
    if (emailText.value === "") {
        emailText.style.background = "#DC143C";
        //add css to the html
        msg.classList.add("error");
        //add text to the empty html element
        msg.innerHTML = "Please enter all fields";
        setTimeout(()=> {emailText.style.background = "white";},3000);
    }
});



// const btn = document.querySelector(".btn");
//btn.style.background = "grey";
