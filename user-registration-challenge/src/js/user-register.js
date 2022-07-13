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

const registerUserHandler = () => {
    document.querySelector(".register").style.display = "block";
    document.querySelector(".users").style.display = "none";
}
registerUserButton.addEventListener("click", registerUserHandler);



const ViewUserHandler = () => {
    document.querySelector(".users").style.display = "block";
    document.querySelector(".register").style.display = "none";
}

viewUserListButton.addEventListener("click", ViewUserHandler);
