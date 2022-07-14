// --- Variables ---

const list = document.getElementById("the-list")
const add = document.getElementById("the-btn")
const del = document.getElementById("del-btn")

let data = [];

// --- Business Logic ---



del.onclick = function() {

    data.pop();

    list.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        
        list.innerHTML += `
            <li class='item'> 
                <img class="item-image" src="./exmpale" alt='iamge'>
                My name is ${data[i].name} and I am know how to code in ${data[i].langauge} 
                <button> contact </button>
            </li>`;
    }

}


add.onclick = function () {

    let firstnameInput = prompt("Enter your firstname: ")
    let langaugeInput = prompt("Enter a programming language you know")

    // JavaScript Object Literal
    let newPerson = {
        name : firstnameInput,
        langauge : langaugeInput
    }

    // adding to end array
    data.push(newPerson);

    // resets the DOM
    list.innerHTML = "";

    // for loop to iterate over data array
    for (let i = 0; i < data.length; i++) {

        // Creates an HTML Element for each element inside the data array
        list.innerHTML += `
            <li class='item'> 
                <img class="item-image" src="./exmpale" alt='iamge'>
                My name is ${ data[i].name } and I am know how to code in ${ data[i].langauge } 
                <button> contact </button>
            </li>`;
    }

}
