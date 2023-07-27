let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

//Create four function: add(), subtract(),multiplication(), divide()
//Call the correct function when the user clicks on one of the buttons
//Perform the given calculation using num1 and num2
//Render the result of the calculation in the paragraph with id="sum-el"
let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "sum:" + result
}


function subtract() {
    let result = num1 - num2
    sumEl.textContent = "sum:" + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "sum:" + result
}

function multiplication() {
    let result = num1 * num2
    sumEl.textContent = "sum:" + result
}

//E.g. if the userclicks on the 'Plus',button, you should render
//"sun:10" (since 8+2 = 10) inside the paragraph with id="sum-el"

