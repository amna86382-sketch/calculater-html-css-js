
const display = document.getElementById("display");
const message = document.getElementById("message");

// Display mein value add karna
function addValue(value) {
    display.value += value;
    message.textContent = "";
}

// Display clear karna
function clearDisplay() {
    display.value = "";
    message.textContent = "";
}

// Last character delete karna
function deleteLast() {
    display.value = display.value.slice(0, -1);
    message.textContent = "";
}

// Calculation karna
function calculate() {
    const expression = display.value;

    // Empty input check
    if (expression === "") {
        message.textContent = "Please enter a number!";
        return;
    }

    // Sirf allowed characters check karna
    if (!/^[0-9+\-*/%.()\s]+$/.test(expression)) {
        message.textContent = "Invalid input!";
        return;
    }

    try {
        // Percentage ko decimal mein convert karna
        const updatedExpression = expression.replace(
            /(\d+\.?\d*)%/g,
            "($1/100)"
        );

        // Expression calculate karna
        const result = Function(
            '"use strict"; return (' + updatedExpression + ')'
        )();

        // Invalid result check
        if (!Number.isFinite(result)) {
            message.textContent = "Cannot divide by zero!";
            return;
        }

        // Result display karna
        display.value = result;
        message.textContent = "";

    } catch (error) {
        message.textContent = "Invalid calculation!";
    }
}
