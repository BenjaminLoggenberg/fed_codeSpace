let userInput = prompt("Please input a number:");

console.log(typeof userInput);

let numberConv = parseInt(userInput);

console.log(typeof numberConv);

function oddEven() {

    if (typeof numberConv !== "number") {
        prompt("PLEASE INPUT A NUMBER, NO LETTERS:");
    }

    else {
        let modulo = (numberConv % 2);

        if (modulo == 1) {
            document.getElementById('answer').style.display = "block";
            document.getElementById('answer').innerHTML = "Your number is Uneven";
        }

        else {
            document.getElementById('answer').style.display = "block";
            document.getElementById('answer').innerHTML = "Your number is even";
        }
    }
}
oddEven();