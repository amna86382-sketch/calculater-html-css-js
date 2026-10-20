const display = document.getElementById("display");
const message = document.getElementById("message");

function addValue(value) {
    display.value += value;
    message.textContent = "";
}

function clearDisplay() {
    display.value = "";
    message.textContent = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    message.textContent = "";
}

function calculate() {
    const expression = display.value;

    if (expression === "") {
        message.textContent = "Please enter a number!";
        return;
    }

    try {
        const result = Function("return " + expression)();

        if (!Number.isFinite(result)) {
            message.textContent = "Invalid calculation!";
            return;
        }

        display.value = result;
        message.textContent = "";

    } catch (error) {
        message.textContent = "Invalid calculation!";
    }
}