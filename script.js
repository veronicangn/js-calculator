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

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if(/[0-9+\-*/.]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape' || key.toLowerCase() === 'c') {
        clearDisplay();
    }
});