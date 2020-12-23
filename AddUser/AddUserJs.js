//Single Element selectors
const form = document.getElementById("my-form"); //get an element by the id
const container = document.querySelector(".container"); //selects the first element that is found (. for class, # for id's, tag [h1] work too)

//Multiple element selectors
const items = document.querySelectorAll(".item"); //node list; Array methods can be used on it
//items.forEach(item => console.log(item.textContent)); //Console log each item 

console.log(document.getElementsByClassName("item")); //HTMLCollection, Array methods can not be used on it. Hss to be converted to an array
console.log(document.getElementsByTagName("h1")); //Also returns a HTMLCollection


//Manipulating DOM Elements
//remove items form the items class
const ul = document.querySelector(".items");
ul.remove(); //remove the whole items class
ul.lastElementChild.remove(); //remove the last element of the child of the class
//Manipulating text
ul.firstElementChild.textContent = "This has been added by JavaScript"; //Edit the first element of the class
ul.children[1].innerText = "hello"; //inner text will not return the text of hidden elements
ul.lastElementChild.innerHTML = "<h2>This text was made into an h1 by js </h2>";

//Add  click event to the button to take the name and email and put it into the list
const btn = document.querySelector(".btn");
btn.addEventListener("click", function (e) {
    //prevent the site from refreshing because of the submit element
    //e.preventDefault();

    const nameText = document.querySelector("#name");
    const emailText = document.querySelector("#email");
    const userList = document.querySelector("#users");

    let incomplete = false;

    const msg = document.querySelector(".msg");
    if (nameText.value === "") {

        //Set incomplete to true if an Error is caught
        incomplete = true;

        //set the background to red
        nameText.style.background = "#ff0033";

        //set the appearance to 3 seconds
        setTimeout(() => { nameText.style.background = "white"; }, 3000);
    }
    if (emailText.value === "") {

        //Set incomplete to true if an Error is caught
        incomplete = true;
        //set the background to red
        emailText.style.background = "#ff0033";

        //set the appearance to 3 seconds
        setTimeout(() => {
            emailText.style.background = "white";
        }, 3000);
    }

    if (!incomplete && validateEmail(emailText)) {
        //Create an list list element and append it to the existing userList
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${nameText.value} : ${emailText.value}`));
        userList.appendChild(li);

        //Clear fields
        nameText.value = "";
        emailText.value = "";

        //Remove error messages
        try {
            msg.remove();
        } catch (error) {
        }

        //Set border color from red to grey
        emailText.style.borderColor = "#ccc";
    } else {
        //Add css to the html of msg
        try {

        }
        catch {
            msg.classList.add("error");
        }

        //Add text to the empty html element
        msg.innerHTML = "Please enter all fields correctly";
    }
});

function validateEmail(emailText) {
    //Check if input is an email. Source: https://www.w3resource.com/javascript/form/email-validation.php
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailText.value)) {
        return (true);
    }

    //Show the user which field is invalid, error message is displayed by the else statement in the btn
    emailText.style.borderColor = "#ff0033";
    return (false);
}

form.addEventListener("submit", e => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    console.info(formData);
});




































