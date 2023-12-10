 let numbers = [];
    while (true) {
        let inputNumber = prompt("Enter a number (enter 0 to stop):");
        inputNumber = parseFloat(inputNumber);
        if (isNaN(inputNumber)) {
            console.error("Invalid input. Please enter a valid number.");
            continue;
        }
        if (inputNumber === 0) {
            break;
        }
        numbers.push(inputNumber);
    }
    numbers.sort(function(a, b) {
        return b - a;
    });
    console.log("Numbers from largest to smallest:");
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }