/* ----------------------------------------------------
    Setup
---------------------------------------------------- */

/* --- Tab References --- */

// Get reference to all elements in register tab
const registerTab = document.getElementsByClassName("register");
console.log(registerTab);

// Get reference to all elements in userList tab
const userTabs = document.getElementsByClassName("users");
console.log(userTabs);


/* --- Nav references --- */

// code here...
const registerUserButton = document.querySelector("#users-tab-button");
const viewUserListButton = document.querySelector("#register-tab-button");

/* --- Form field references --- */

// code here...
const firstNameInput = document.querySelector("#firstname");
const lastNameInput = document.querySelector("#lastname");
const userNameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitInput = document.querySelector("#register-submit");

/* --- Table list reference --- */

// code here...
const userList = document.querySelector("#user-list");



/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

// code here...



/* ----------------------------------------------------
    Event Listenters and Interactivity
---------------------------------------------------- */

//question 1: querySelector vs getElementById
//question 2: why doesn't the rest of the page toggle but the button only?


//FIXED!! HOW TO SWAP DISPLAYS USING BLOCK AND NONE STYLING ON ONE SCREEN: 

const registerUserHandler = () => {
    let registerElements = document.querySelectorAll(".register");
    registerElements.forEach(element => {
        element.style.display = "block";

    });


    let userElements = document.querySelectorAll(".users");
    userElements.forEach(element => {
        element.style.display = "none";

    });

 
}
registerUserButton.addEventListener("click", registerUserHandler);



const viewUserHandler = () => {
    let registerElements = document.querySelectorAll(".register");
    registerElements.forEach(element => {
        element.style.display = "none";

    });


    let userElements = document.querySelectorAll(".users");
    userElements.forEach(element => {
        element.style.display = "block";

    });


}
viewUserListButton.addEventListener("click", viewUserHandler);



