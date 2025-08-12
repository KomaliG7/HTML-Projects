// Calculator functionality
const display = document.getElementById('display');

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        // Replace × with * for proper evaluation
        const expression = display.value.replace(/×/g, '*');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => clearDisplay(), 1000);
    }
}

// Add keyboard support
document.addEventListener('keydown', (event) => {
    if (/[0-9+\-*/.()]/.test(event.key)) {
        addToDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Escape') {
        clearDisplay();
    } else if (event.key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
});