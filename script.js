const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // evaluates the expression inside the display
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
    
}