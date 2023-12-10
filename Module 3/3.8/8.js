function performCalculation() {
    // Get the values from the input fields and the selected operation
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;

    // Check if both inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers.');
        return;
    }

    // Perform the calculation based on the selected operation
    var result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'multi':
            result = num1 * num2;
            break;
        case 'div':
            // Check if the second number is not zero for division
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert('Cannot divide by zero.');
                return;
            }
            break;
        default:
            alert('Invalid operation');
            return;
    }

    // Display the result in the 'result' paragraph
    document.getElementById('result').textContent = 'Result: ' + result;
}
