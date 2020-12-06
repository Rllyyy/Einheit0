//Add a tip on Password
const passwordElement = document.querySelector("#password");
passwordElement.addEventListener("focus", () => {
    document.getElementById("passwordHelp").textContent = "Enter a secure password!";
});

//Remove the tip if the user moves to the next item
passwordElement.addEventListener("blur", ()=>{
    document.querySelector("#passwordHelp").textContent = "";
});

//Prevent default submit behaviour
document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
});

//Focus on a input field
//passwordElement.focus();

//Checkboxes (Multiple Choice)
document.querySelector("#confirmation").addEventListener("change", e => {
    console.log(`Email confirmation request changed to: ${e.target.checked}`);
})

//Radio-Buttons (Single Choice). Get the value at change event.
const subscriptionElements = document.getElementsByName("subscription");
subscriptionElements.forEach(element => {
   element.addEventListener("change", e => {
       console.log(`Selected subscription: ${e.target.value}`);
   }) 
});

//Dropdown Lists which selects the inner text of the dropdown list and the value
const nationality = document.querySelector("#nationality");
nationality.addEventListener("change", e => {
    console.log(`Nationality changed to: ${nationality.options[nationality.selectedIndex].text} (${e.target.value})`);
});

//Accessing Form Fields
const formElement = document.querySelector("form");
console.log(`Number of interactive elements: ${formElement.elements.length}`);

//Instant Form validation for password
document.querySelector("#password").addEventListener("input", e => {
    //Get length of password
    const passwordLength = e.target.value.length;
    let passwordLengthText = "too short";
    let passwordLengthErrorColor = "darkred";

    if(passwordLength >= 10) {
        passwordLengthText = "secure";
        passwordLengthErrorColor = "green";
    } else if (passwordLength >= 5) {
        passwordLengthText = "insecure";
        passwordLengthErrorColor = "rgb(255, 183, 0)"; 
    }

    const passwordHelpElement = document.querySelector("#passwordHelp");
    passwordHelpElement.textContent = `Length: ${passwordLengthText}`;
    passwordHelpElement.style.color = passwordLengthErrorColor;
});

//Post-Validation Input
/*
document.getElementById("emailAddress").addEventListener("blur", e => {
  let emailAddressValidity = "";
  if (e.target.value.indexOf("@") === -1) {
    // the email address doesn't contain @
    emailAddressValidity = "Invalid address";
  }
  document.getElementById("emailHelp").textContent = emailAddressValidity;
});
*/
