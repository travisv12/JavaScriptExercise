function calculate() {
    // Get user input from the text field
    var userInput = document.getElementById('calculation').value.trim();

    // Check if the input is empty
    if (userInput === '') {
        alert('Please enter a calculation.');
        return;
    }

    // Check if the input includes a valid operator (+, -, *, /)
    if (!userInput.includes('+') && !userInput.includes('-') && !userInput.includes('*') && !userInput.includes('/')) {
        alert('Invalid calculation. Please use +, -, *, / operators.');
        return;
    }

    // Split the input based on the operator
    var operators = ['+', '-', '*', '/'];
    var operator = operators.find(op => userInput.includes(op));

    if (!operator) {
        alert('Invalid calculation. Please use +, -, *, / operators.');
        return;
    }

    var operands = userInput.split(operator);

    // Convert operands to integers
    var operand1 = parseInt(operands[0]);
    var operand2 = parseInt(operands[1]);

    // Perform the calculation based on the operator
    var result;

    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            // Check if the second operand is not zero for division
            if (operand2 !== 0) {
                result = Math.floor(operand1 / operand2);
            } else {
                alert('Cannot divide by zero.');
                return;
            }
            break;
        default:
            alert('Invalid operator');
            return;
    }

    // Display the result
    document.getElementById('result').textContent = 'Result: ' + result;
}
