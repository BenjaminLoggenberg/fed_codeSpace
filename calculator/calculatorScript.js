//const buttonNine = document.getElementById("nine");
//console.log(buttonNine);

let expression = document.getElementById("display").value;

function buildExpression(value) {
    expression = expression + value;
    document.getElementById("display").value = expression;
}

function calculate() {
    document.getElementById("display").value = eval(expression);
}